require('dotenv').config();
const express = require('express');

const musicRoutes = require('./routes/musicRouter');

const app = express();

// for application/json
app.use(express.json());

// for application/x-www-form-urlencoded
app.use(express.urlencoded());

// configure header
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    res.setHeader('Content-Type', 'application/json');
    next();
});

app.use('/api/v1/musics', musicRoutes);

module.exports = app;