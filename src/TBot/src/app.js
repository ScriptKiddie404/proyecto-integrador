require('dotenv').config();
// ================= BOT REQUIREMENTS ===================== //
const fetch = require('node-fetch');
const { Telegraf } = require('telegraf');
const bot = new Telegraf(process.env.HEROKU_BOT_TOKEN || process.env.BOT_TOKEN);

// ================ EXPRESS REQUIREMENTS ================ //
const express = require('express');
const app = express();
const expressPort = process.env.PORT || 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
// ===================================================== //

//================= MONGO STUFF =========================///
require('./db/mongoose');
const User = require('./model/User');


//=====================================================================================
bot.start(async (ctx) => {

    const { id, first_name, last_name } = ctx.message.from;
    const user = new User({
        telegramChatId: id,
        first_name: first_name,
        last_name: last_name
    });

    console.log("Un usuario ha interactuado con el bot: ");
    console.log(user);

    let message = `${first_name}, bienvenid@ a nuestro sistema de monitoreo, por favor selecciona una de las siguientes opciones:`;

    // Guardamos al nuevo usuario en la base de datos:
    try {
        await user.save();
        console.log('Registro en la base de datos.');
    } catch (error) {
        console.log(error);
    }

    bot.telegram.sendMessage(id, message, {
        reply_markup: {
            inline_keyboard: [
                [
                    { text: "Temperature", callback_data: 'temperature' }
                ],
                [
                    { text: "Humidity", callback_data: 'humidity' }
                ]
            ]
        }
    });
});


bot.action('temperature', async (ctx) => {
    const response = await fetch('https://tc-utch-api.herokuapp.com/last-temperature');
    const data = await response.json();
    ctx.reply(data[0]['temperature'] + ' °C');
});

bot.action('humidity', async (ctx) => {
    const response = await fetch('https://tc-utch-api.herokuapp.com/last-humidity');
    const data = await response.json();
    ctx.reply(data[0]['humidity'] + '%');
});

//=====================================================================================

app.get('/', async (req, res) => {
    res.status(200).sendFile(__dirname + '/public/index.html');
});

app.post('/send-alert', async (req, res) => {
    let users;
    const { sensorType, temperature, humidity } = req.body;

    try {
        users = await User.find({});
    } catch (error) {
        console.log(error);
    }

    console.log(users);

    users.forEach(async (user) => {
        if (sensorType === 'humidity') {
            try {
                await bot.telegram.sendMessage(user['telegramChatId'], `¡${user['first_name']}! se ha alcanzado una humedad crítica en el sensor: ${humidity}%`);
            } catch (error) {
                console.log(error);
            }
        } else if (sensorType === 'temperature') {
            try {
                await bot.telegram.sendMessage(user['telegramChatId'], `¡${user['first_name']}!, se ha alcanzado una temperatura crítica de: ${temperature}`);
            } catch (error) {
                console.log(error);
            }
        }
    });

});

//=====================================================================================

// Start server:
app.listen(expressPort, () => {
    console.log('Server listening on port: ', expressPort);
});
// Start bot:
bot.launch();