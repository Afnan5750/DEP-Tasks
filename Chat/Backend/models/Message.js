const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
    username: String,
    message: String,
    sender: String
});

module.exports = mongoose.model('Message', messageSchema);
