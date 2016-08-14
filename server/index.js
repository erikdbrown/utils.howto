var express = require('express');
var app = express();
var port = 3000;

app.use(express.static('client'));

app.get('/', function (req, res) {
  
});

app.listen(port, function () {
  console.log('Listening on port ' + port);
});