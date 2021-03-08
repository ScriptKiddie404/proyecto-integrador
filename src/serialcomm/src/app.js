// Modificar estos datos acorde al usuario:
const arduinoPort = 'COM3'
const user = 'Fernando';

// Importar el esquema de la base de datos:
require('./db/mongoose');
const SensorRecord = require('./models/SensorRecord');

//Chalk es usada sólo para brindar estética a la salida de consola
const chalk = require('chalk');
const okColor = chalk.bgGreenBright.black;

// Serial Port communication
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(arduinoPort, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));


// Este método se llama una vez que inicia la comunicación.
port.on("open", () => {
    console.clear();
    console.log(okColor("Comunicación serializada iniciada..."));
});

// El método con evento 'data' se llama siempre que se recibe un dato del puerto serial
// parser.on('data', (data) => {

//     const [temperature, humidity] = data.replace(/\r/ig, '').split(' ');
//     console.clear();
//     console.log(data);

//     const sensorData = new SensorRecord({
//         user: user,
//         temperature: temperature,
//         humidity: humidity
//     });

//     sensorData.save().then(() => {
//         console.log('Registro insertado en la BD');
//     }).catch(error => {
//         console.log(error);
//     })

// });

async function Test() {

    const objeto = {
        user: "Fernando",
        date: new Date().toISOString(),
        temperature: 34.23,
        humidity: 23.1
    }

    const data = new SensorRecord(objeto);

    try {
        await data.save();
        console.log("Insertado");
    } catch (error) {
        console.log(error);
    }


}

Test();