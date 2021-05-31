const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const assert = require('assert')
const jwt = require('jsonwebtoken')

const Paitent = require('./models/Paitent.js')

const secret = 'this-is-my-secret'

// Connect to database
mongoose.connect('mongodb://localhost:27017/VaccineBooker', { useNewUrlParser: true, useUnifiedTopology: true })


// Create REST (HTTP) API server object
const app = express()
app.use(express.json())
app.use(cors())


// Define http requests

app.post('/setPaitent', async (req, res) => {

    const paitent = new Paitent(req.body)
    try {
        await paitent.save()
    } catch (err) {
        res.status(500).send(err)
    }

    res.status(200).send()
})

app.post('/getPaitent', async (req, res) => {

    try {
        assert('firstName' in req.body)
        assert('lastName' in req.body)
        assert('healthId' in req.body)
    } catch {
        res.status(400).send('Missing parameters')
    }


    const paitent = await Paitent.findOne(req.body).collation({ locale: "en_US", strength: 2 })
    if (!paitent) res.status(404).send()
    else res.status(200).send(paitent)
})

app.post('/getPaitentCode', async (req, res) => {

    try {
        assert('firstName' in req.body)
        assert('lastName' in req.body)
        assert('healthId' in req.body)
    } catch {
        res.status(400).send('Missing parameters')
    }


    const paitent = await Paitent.findOne(req.body).collation({ locale: "en_US", strength: 2 })
    if (!paitent) res.status(404).send()
    else {
        const token = jwt.sign(paitent.toObject(), secret, { expiresIn: '5 min' })
        res.status(200).send({ token })
    }
})

app.post('/getPaitentFromCode', async (req, res) => {

    try {
        assert('token' in req.body)
    } catch {
        res.status(400).send('Missing parameters')
    }


    jwt.verify(req.body.token, secret, async (err, item) => {
        if (err) res.status(403).send()
        else { 

            const paitentDef = (({_id, firstName, lastName, healthId}) => ({_id, firstName, lastName, healthId}))(item)
            console.log(paitentDef)
            const paitent = await Paitent.findOne(paitentDef).collation({locale: "en_US", strength: 2})
            if (!paitent) res.status(404).send()
            else res.status(200).send(paitent)

        }
    })



})




// Run server
app.listen(5000, '0.0.0.0', () => console.log('Health server listening on port 5000'))