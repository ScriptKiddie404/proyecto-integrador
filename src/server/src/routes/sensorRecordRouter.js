const express = require('express');
const SensorRecord = require('../models/SensorRecord');
const app = express();
// const router = new express.Router();

// Onbtener todos los registros:
app.get('/records', async (req, res) => {
    try {
        const records = await SensorRecord.find({});
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});