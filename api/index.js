import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'

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

// Run server
app.listen(5000, '0.0.0.0', () => console.log('Health server listening on port 5000'))