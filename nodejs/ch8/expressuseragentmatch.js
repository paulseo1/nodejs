var http = require('http');
var express = require('express');
var app = express();

app.use( function(req, res) {
	var agent = req.header('User-Agent');
	console.log(agent);
	if(agent.toLowerCase().match(/chrome/))
		res.send('<h1> Hello Chrome</h1>');
	else
		res.send('<h1> Hello Express</h1>');
});

http.createServer(app).listen(10015, function () {
	console.log('Server running at 10015 port');
});
