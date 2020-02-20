/*
var http = require('http');

http.createServer(function (req, res) {
    console.log('Server is running');
    res.write('Hello World!');
    res.end();
}).listen(8080);
*/


var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World from Express');
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});