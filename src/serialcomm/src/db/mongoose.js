// Making a connection
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sensor-data', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});
