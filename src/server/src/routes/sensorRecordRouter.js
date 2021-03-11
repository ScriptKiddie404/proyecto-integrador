const express = require('express');
const SensorRecord = require('../models/SensorRecord');
const router = new express.Router();

router.get('/', (req, res) => {
    res.send('hola putito');
});

// All records
router.get('/records', async (req, res) => {
    try {
        const records = await SensorRecord.find({});
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Last N records:
router.get('/records/:n', async (req, res) => {
    const { n } = req.params;
    const nParsed = Number.parseInt(n);

    try {
        const records = await SensorRecord.find({}).sort({ _id: -1 }).limit(nParsed);
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }

});

// Get only the last record:
router.get('/last-record', async (req, res) => {
    try {
        const record = await SensorRecord.find({}).sort({ _id: -1 }).limit(1);
        res.status(200).send(record);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

//Get last N temperatures
router.get('/temperatures/:n', async (req, res) => {
    const { n } = req.params;
    const nParsed = Number.parseInt(n);
    try {
        const temperatures = await SensorRecord.find({}, { temperature: 1, _id: 0 }).sort({ _id: -1 }).limit(nParsed);
        res.status(200).send(temperatures)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

//Get all temperatures
router.get('/temperatures', async (req, res) => {
    try {
        const temperatures = await SensorRecord.find({}, { temperature: 1, _id: 0 });
        res.status(200).send(temperatures);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/last-temperature', async (req, res) => {
    try {
        const temperature = await SensorRecord.find({}, { temperature: 1, _id: 0 }).sort({ _id: -1 }).limit(1);
        res.status(200).send(temperature);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

//Get last N temperatures
router.get('/humidity/:n', async (req, res) => {
    const { n } = req.params;
    const nParsed = Number.parseInt(n);
    try {
        const humidity = await SensorRecord.find({}, { humidity: 1, _id: 0 }).sort({ _id: -1 }).limit(nParsed);
        res.status(200).send(humidity)
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

//Get all temperatures
router.get('/humidity', async (req, res) => {
    try {
        const humidity = await SensorRecord.find({}, { humidity: 1, _id: 0 });
        res.status(200).send(humidity);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

router.get('/last-humidity', async (req, res) => {
    try {
        const humidity = await SensorRecord.find({}, { humidity: 1, _id: 0 }).sort({ _id: -1 }).limit(1);
        res.status(200).send(humidity);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

module.exports = router;