const fs = require('fs');
var express = require('express');
var app = express();

const port = process.env.PORT;
var content;
var parsedContent;
fs.readFile('./data.json', function read(err, data) {
  if (err) {
    throw err;
  }
  parsedContent = JSON.parse(data);
  console.log('Data to be sent: \n' + JSON.stringify(parsedContent));
});

app.get('/', function(req, res) {
  res.send('Hello World!');
});

app.get('/json', function(req, res) {
  res.send(JSON.stringify(parsedContent));
});

app.listen(port, function() {
  console.log('Server listening on port ' + port);
});
