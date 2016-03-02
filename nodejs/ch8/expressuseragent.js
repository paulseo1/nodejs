var http = require('http');
var express = require('express');
app = express();

app.use( function(req, res) {
	var agent = req.header('User-Agent');
	console.log(req.headers);
	console.log(agent);
	res.status(200);
});

http.createServer(app).listen(10015, function() {
	console.log('Server running at 10015 port');
});
