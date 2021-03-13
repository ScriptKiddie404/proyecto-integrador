// ============================================================= //
// Modificar estos datos acorde al usuario:
const arduinoPort = 'COM3'; //cambiar al adecuado.
const user = 'Fernando'; //cambiar al usuario adecuado.
const temperatureLimit = 50; //Change for any value you want
const humidityLimit = 70; //Change for any value you want
// ============================================================= //

// ============================================================= //
// Importar el esquema de la base de datos y la conexión.
require('./db/mongoose');
const SensorRecord = require('./models/SensorRecord');
// ============================================================= //

// ==================== NODE FETCH ==============================//
const fetch = require('node-fetch');


// ============================================================= //
// Serial Port communication
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(arduinoPort, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// ============================================================= //


// ============================================================= //
// Este método se llama una vez que inicia la comunicación.
port.on("open", () => {
    console.clear();
    console.log("Comunicación serializada iniciada...");
});
// ============================================================= //


// ============================================================= //
// Se llama siempre que se recibe info. en el puerto serial.
parser.on('data', async (data) => {

    const [temperature, humidity] = data.replace(/\r/ig, '').split(' ');
    console.clear();
    let temperatureParsed = Number.parseFloat(temperature);
    let humidityParsed = Number.parseFloat(humidity);
    console.log(`New record on database - T: ${temperature} - H: ${humidity}`);

    if (humidityParsed > humidityLimit) {
        console.log('Hummidity limit reached');
        const response = await fetch('https://localhost:4000/send-alert', {
            method: 'POST',
            body: JSON.stringify({ humidity: humidityParsed }),
            headers: { 'Content-Type': 'application/json' }
        });
        console.log(`Mensaje enviado a telegram`);
        console.log(response);
    }

    if (temperatureParsed > temperatureLimit) {
        console.log('Temperature limit reached');
    }

    const sensorData = new SensorRecord({
        user: user,
        date: new Date().toISOString(),
        temperature: temperature,
        humidity: humidity
    });

    try {
        await sensorData.save();
    } catch (error) {
        console.log(error);
    }

});
// ============================================================= //