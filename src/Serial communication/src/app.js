// =========================================================================================== //
// ================================== VARIABLES DE ENTORNO =================================== //
// =========================================================================================== //
require('dotenv').config();
// =========================================================================================== //
//========================== CAMBIAR ESTA VARIABLE PARA PRODUCCIÓN O DEV ===================== //
// =========================================================================================== //
const enviroment = 'produccion'; //dev o produccion
const botURL = enviroment === 'dev' ? process.env.DEV_URL : process.env.PROD_URL;
// =========================================================================================== //
// ==================================== CONFIGURACIÓN CHALK ================================== //
const chalk = require('chalk');
const alertColor = chalk.bgRedBright.black;
// =========================================================================================== //
// ==================== CONFIGURACIÓN PUERTO ARDUINO Y NOMBRE SENSOR ========================= //
// =========================================================================================== //
const arduinoPort = 'COM3'; //cambiar al adecuado.
const user = 'Fernando'; //cambiar al usuario adecuado.
const temperatureLimit = 50; //Change for any value you want
const humidityLimit = 70; //Change for any value you want
// =========================================================================================== //
// ============================= CONFIGURACIÓN MONGO DB======================================= //
// =========================================================================================== //
require('./db/mongoose');
const SensorRecord = require('./models/SensorRecord');
// =========================================================================================== //
// ===================================== NODE FETCH ========================================== //
// =========================================================================================== //
const fetch = require('node-fetch');
// =========================================================================================== //
// ======================== CONFIGUARACIÓN COMUNICACIÓN SERIAL =============================== //
// =========================================================================================== //
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort(arduinoPort, { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));
// =========================================================================================== //
// ===================== LLAMAR AL INICIAR LA COMUNICACIÓN SERIAL ============================ //
// =========================================================================================== //
port.on("open", () => {
    console.clear();
    console.log("Serial communication started...");
});
// =========================================================================================== //
// ======================== LLAMAR AL RECIBIR DATOS DEL PUERTO SERIAL ======================== //
// =========================================================================================== //
parser.on('data', async (data) => {

    console.clear();

    const [temperature, humidity] = data.replace(/\r/ig, '').split(' ');
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

    console.log(`New record on database - Temperature: ${temperature} °C - Humidity: ${humidity} %`);

    if (humidityParsed > humidityLimit) {
        console.log(alertColor('Hummidity limit reached'));
        await fetch(botURL, {
            method: 'POST',
            body: JSON.stringify({
                sensorType: 'humidity',
                humidity: humidityParsed,
                temperature: temperatureParsed
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }

    if (temperatureParsed > temperatureLimit) {
        console.log(alertColor('Temperature limit reached'));
        await fetch(botURL, {
            method: 'POST',
            body: JSON.stringify({
                sensorType: 'temperature',
                humidity: humidityParsed,
                temperature: temperatureParsed
            }),
            headers: { 'Content-Type': 'application/json' }
        });
    }

});
// =========================================================================================== //