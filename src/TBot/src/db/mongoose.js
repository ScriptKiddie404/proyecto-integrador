const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect(process.env.MONGODB_URI || `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.wgodv.mongodb.net/users?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});