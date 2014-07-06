var http = require('http'),
	fs = require('fs');

var uri = process.argv[3],
	port = process.argv[2];

var server = http.createServer(function(req, resp) {
	var stream = fs.createReadStream(uri);
	stream.pipe(resp);
});

server.listen(port);