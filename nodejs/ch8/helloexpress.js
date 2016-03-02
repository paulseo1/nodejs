var express = require('express');
var http = require('http')

var app = express();

app.use(function (req, res) {
	res.writeHead(200, { 'Content-Type':'text/html'});
	res.end('<h1>hello express</h1>');
});

http.createServer(app).listen(10015, function() {
	console.log('Server running at 10015 port');
});
