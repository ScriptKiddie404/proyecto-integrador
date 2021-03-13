const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    telegramChatId: {
        type: Number,
        required: true
    },
    first_name: {
        type: String,
        required: true
    },
    last_name: {
        type: String
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;