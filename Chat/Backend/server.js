const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const mongoose = require('mongoose');
const cors = require('cors');
const Message = require('./models/Message');
require('dotenv').config();

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
    cors: {
        origin: '*',
    },
});

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

io.on('connection', (socket) => {
    console.log('New client connected');

    socket.on('sendMessage', async (messageData) => {
        const message = new Message(messageData);
        await message.save();
        io.emit('receiveMessage', messageData);
    });

    socket.on('disconnect', () => {
        console.log('Client disconnected');
    });
});

server.listen(process.env.PORT || 5000, () => {
    console.log(`Server running on port ${process.env.PORT || 5000}`);
});
