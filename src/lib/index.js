var app = require('./server.js');
var fs = require('fs');
var mongojs = require('mongojs');
var bodyParser = require('body-parser');

var db = mongojs('contactlist', ['contactlist']);

app.use(bodyParser.json());
