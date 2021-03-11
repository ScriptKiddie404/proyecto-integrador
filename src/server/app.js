// Se importa la base de datos para la conexión:
require('./src/db/mongoose');
// Imports para el servidor:
const express = require('express');
const app = express();
const morgan = require('morgan');
const PORT = process.env.PORT || 3000;

// Import Routers:
const sesorRecordsRouter = require('./src/routes/sensorRecordRouter');

// =================================================== //
// =================== MIDDLEWARE ==================== //
// =================================================== //
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// =================================================== //
// =================== ROUTERS ======================= //
// =================================================== //
app.use(sesorRecordsRouter);


app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});