var express = require('express');

var cfenv = require('cfenv');


var app = express();

app.use(express.static(__dirname + '/../client'));

var appEnv = cfenv.getAppEnv();

app.get('/', function(req, res) {
  res.send('hello world');
});

app.listen(process.env.PORT || 3000);
