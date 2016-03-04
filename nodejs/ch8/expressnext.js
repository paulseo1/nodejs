var http = require('http');
var express = require('express');

var app = express();

app.use( function(req, res, next) {
	console.log("First ");
	next();
});

app.use( function(req, res, next) {
	console.log("Second ");
	next();
});

app.use( function(req, res, next) {
	console.log("Third ");
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1> Express next</h1>');
});

http.createServer(app).listen(10015, function() {
	console.log("Server running at 10015 port");
});
