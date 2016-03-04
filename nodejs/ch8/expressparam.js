var http = require('http');
var express = require('express');
var app = express();

app.use( function(req, res, next) {
	//var name = req.param('name');
	var name = req.query.name;
	//var region = req.param('region');
	var region = req.query.region;

	res.send('<h1>' + name + '-' + region + '</h1>');
});

http.createServer(app).listen(10015, function() {
	console.log('Server running at 10015 port');
});
