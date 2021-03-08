require('dotenv').config()
const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.wgodv.mongodb.net/sensor-data?retryWrites=true&w=majority` {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});