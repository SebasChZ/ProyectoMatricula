require('dotenv').config();
const express = require('express');
const app = express()
const path = require('path');
const logEvents = require('./middleware/logEvents');
const connectDB = require('./config/dbConn');
const { default: mongoose } = require('mongoose');
const PORT = process.env.PORT || 3500


app.post('/api/login', async(req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    const logName = 'login.log';
    const message = `Login attempt for ${email}`;
    await logEvents(message, logName);
    res.send('Login route');
});

console.log('MongoDB connecting...');
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))