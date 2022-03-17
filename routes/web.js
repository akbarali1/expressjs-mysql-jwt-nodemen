const express = require('express');
const api = express.Router();
const db = require('../dbConnection');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

api.get('/', (req, res) => {
    res.send('Hello World API');
});


module.exports = api;
