const fs = require('fs');
var express = require('express');
var app = express();

var content;
var parsedContent;
fs.readFile('./data.json', function read(err, data) {
  if (err) {
    throw err;
  }
  parsedContent = JSON.parse(data);
  console.log('Data to be sent: \n' + JSON.stringify(parsedContent));
});

app.use(function (req, res, next) {
    res.header('Content-Type', 'application/json');
    next();
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/json', function(req, res) {
  res.send(JSON.stringify(parsedContent));
});

app.listen(3000, function() {
  console.log('Server listening on port 3000.');
});
