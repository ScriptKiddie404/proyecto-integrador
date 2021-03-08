//Chalk es usada sólo para brindar estética a la salida de consola
const chalk = require('chalk');
const okColor = chalk.bgGreenBright.black;
const tempColor = chalk.bgRedBright.black;
const humColor = chalk.bgCyanBright.black;

// Serial Port communication
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));


// Este método se llama una vez que inicia la comunicación.
port.on("open", () => {
    console.clear();
    console.log(okColor("Comunicación serializada iniciada..."));
});

// El método con evento 'data' se llama siempre que se recibe un dato del puerto serial
let counter = 0;
parser.on('data', data => {

    const [temperature, humidity] = data.split(' ');

    console.clear();
    counter++;
    const record = {
        temperature,
        humidity
    };

    console.log(okColor(`Total records captured: ${counter}`));
    console.table(record);

});

