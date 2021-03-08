//Chalk es usada sólo para brindar estética a la salida de consola
const chalk = require('chalk');
const okColor = chalk.bgGreenBright.black;


// Serial Port communication
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on("open", () => {
    console.clear();
    console.log(okColor("Comunicación serializada iniciada..."));
});

parser.on('data', data => {
    console.log(data);
});

