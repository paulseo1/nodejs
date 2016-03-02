var http = require('http');
var express = require('express');

var app = express();

app.use( function(req, res) {
	var output = [];
	for(var i=0; i < 3; i++) {
		output.push ({
			count: i, 
			name: 'name - ' + i
		})
	}
	res.send(output);
});

http.createServer(app).listen(10015, function() {
	console.log('Server running at 10015 port');
});
