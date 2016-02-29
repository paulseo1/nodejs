var http = require('http');

http.createServer(function (req, res) {

	if (req.url == '/') {
		res.write('<!DOCTYPE html>');
		res.write('<html>');
		res.write('<head>');
		res.write('	<title>Forever</title>');
		res.write('</head>');
		res.write('<body>');
		res.write('	<h1>Forever</h1>');
		res.write('</body>');
		res.write('</html>');
		res.end();
	} else {
		error.error.error();
	}
}).listen(10015, function () {
	console.log('Server running at 10015 port');
});

