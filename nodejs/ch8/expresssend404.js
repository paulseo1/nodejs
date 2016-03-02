var http = require('http');
var express = require('express');
var app = express()

app.use( function(req, res) {
	//res.send(404, '<h1>Not Found</h1>');
	res.status(404).send('<h1>Not Found</h1>');
});

http.createServer(app).listen(10015, function() {
	console.log('Server running at 10015 port');
});
