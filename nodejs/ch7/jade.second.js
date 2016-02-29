var http = require('http');
var jade = require('jade');
var fs = require('fs');

http.createServer(function (req, res) {
	fs.readFile('jadePageSecond.jade', 'utf-8', function (error, data) {
		var fn = jade.compile(data);
		res.writeHead(200, {'Content-Type': 'text/html' });
		res.end(fn( {
			name: 'RintIanTta',
			description: 'Hello jade With Nodejs!'
		}));
	});
}).listen(10015, function () {
	console.log('Server Running at 10015 port');
});
