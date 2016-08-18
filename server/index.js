var express = require('express');
var db = require('../db/config.js');
var app = express();
var port = 3000;

app.use(express.static('client'));


app.get('/howtos', function (req, res) {});
app.get('/howtos/:id', function (req, res) {});


app.listen(port, function () {
  console.log('Listening on port ' + port);
});