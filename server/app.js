// import files and packages up here
var express = require('express');
var morgan = require('morgan');
var data = require('./data');

// create your express server below
var app = express();

app.use(morgan('combined'));

app.get('/', function (req, res) {
    res.status(200).send(JSON.stringify(data));
});

app.get('/data', function (req, res) {
    res.status(200).send(data);
});

// add your routes and middleware below

// finally export the express application
module.exports = app;
