//Chalk es usada sólo para brindar estética a la salida de consola
const chalk = require('chalk');
const okColor = chalk.bgGreenBright.black;

const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

port.on("open", () => { console.log(okColor("Serial communication started...")) });

parser.on('data', data => {
    console.log(data);
});

