var http = require('http');

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/html'});
	res.end('<h1>Test - File Change Sec</h1>');
}).listen(10015, function () {
	console.log('Server running at port 10015');
});
