console.log(__dirname + '/src/public');

// Se importa la base de datos para la conexión:
require('./src/db/mongoose');
const { response } = require('express');
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
app.use(express.static(__dirname + '/src/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('tiny'));

// =================================================== //
// =================== ROUTERS ======================= //
// =================================================== //
app.get('/', async (req, res) => {
    response.sendFile(__dirname + '/src/public/index.html');
});

app.use(sesorRecordsRouter);


app.listen(PORT, () => {
    console.log('Listening on port: ', PORT);
});