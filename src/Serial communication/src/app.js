// ============================================================= //
// Modificar estos datos acorde al usuario:
const arduinoPort = 'COM3'; //cambiar al adecuado.
const user = 'Fernando'; //cambiar al usuario adecuado.
const temperatureLimit = 50; //Change for any value you want
const humidityLimit = 70; //Change for any value you want
// ============================================================= //


//=========== CAMBIAR ESTA VARIABLE PARA PRODUCCIÓN O DEV ===============//
const entorno = 'produccion'; //dev o produccion
const botURL = entorno === 'dev' ? process.env.DEV_URL : process.env.PROD_URL;

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

    console.log(`New record on database - T: ${temperature} - H: ${humidity}`);

    if (humidityParsed > humidityLimit) {
        console.log('Hummidity limit reached');
        const response = await fetch(botURL, {
            method: 'POST',
            body: JSON.stringify({ sensorType: 'humidity', humidity: humidityParsed, temperature: temperatureParsed }),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (temperatureParsed > temperatureLimit) {
        console.log('Temperature limit reached');
        const response = await fetch(botURL, {
            method: 'POST',
            body: JSON.stringify({ sensorType: 'temperature', humidity: humidityParsed, temperature: temperatureParsed }),
            headers: { 'Content-Type': 'application/json' }
        });
    }


});
// ============================================================= //