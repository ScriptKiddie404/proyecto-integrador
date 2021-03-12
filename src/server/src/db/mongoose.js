const mongoose = require('mongoose');
require('dotenv').config();

// mongodb+srv://fernando:nC.c-ZL3Qhc.rqY@cluster0.wgodv.mongodb.net/sensor-data?retryWrites=true&w=majority

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wgodv.mongodb.net/sensor-data?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).catch(error => console.log(error));