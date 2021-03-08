const mongoose = require('mongoose');
const { Schema } = mongoose;

const SensorRecordSchema = new Schema({
    user: {
        type: String,
        required: true,
        trim: true,
    },
    date: {
        type: String,
        required: true
    },
    temperature: {
        type: String,
        required: true
    },
    humidity: {
        type: String,
        required: true
    }
});

const SensorRecord = mongoose.model('SensorRecord', SensorRecordSchema);
module.exports = SensorRecord;