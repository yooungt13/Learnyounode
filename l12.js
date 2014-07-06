var http = require('http'),
	map = require('through2-map');

var port = process.argv[2];

var server = http.createServer(function(req, resp) {
	if( req.method != 'POST' )
		return resp.end('send me a POST\n');

	req.pipe(map(function(chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(resp);
});

server.listen(port);