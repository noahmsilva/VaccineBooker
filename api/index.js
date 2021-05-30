import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import assert from 'assert';

import Paitent from './models/Paitent.js'

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


    const paitent = await Paitent.findOne(req.body).collation({locale: "en_US", strength: 2})
    if (!paitent) res.status(404).send()
    else res.status(200).send(paitent)
})

// Run server
app.listen(5000, '0.0.0.0', () => console.log('Health server listening on port 5000'))