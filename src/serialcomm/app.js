const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
const port = new SerialPort('COM3', { baudRate: 9600 });
const parser = port.pipe(new Readline({ delimiter: '\n' }));

// Read the port data
port.on("open", () => {
    console.log('Serial communication is being started.');
});
parser.on('data', data => {
    const title = document.getElementById('data');
    console.log(data);
    title.innerText = data;
});