// Se importa la base de datos para la conexión:
require('./src/db/mongoose');
// Imports para el servidor:
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

// TEMPORAL:
const SensorRecord = require('./src/models/SensorRecord');

// Import Routers:

// =================================================== //
// =================== MIDDLEWARE ==================== //
// =================================================== //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// =================================================== //
// =================== ROUTERS ======================= //
// =================================================== //
app.get('/', (req, res) => {
    res.send('hola putito');
});

// All records
app.get('/records', async (req, res) => {
    try {
        const records = await SensorRecord.find({});
        res.status(200).send(records);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});

// Last N records:
app.get('/records/:n', async (req, res) => {
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
app.get('/records/last-record', async (req, res) => {
    try {
        const lastRecord = await SensorRecord.find({}).sort({ _id: -1 }).limit(1);
        res.status(200).send(lastRecord);
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
});




app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});