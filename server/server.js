var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var helpers = require('./helpers');


var app = express();

app.use(express.static(__dirname + '/../client'));


var appEnv = cfenv.getAppEnv();

app.use(bodyParser.json());

//test url
// app.get('/', function(req, res) {
//   res.send('hello world');
// });

app.post('/getData', function(req, res) {
  helpers.getData(req.body, function(data) {
    console.log(data.length);
    res.send(data)
  });
})

app.listen(process.env.PORT || 3000);
