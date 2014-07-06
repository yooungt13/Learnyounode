var http = require('http'),
	url = require('url');

var port = process.argv[2];

var server = http.createServer(function(req, resp) {
	if (req.method != 'GET')
		return resp.end('send me a GET\n');

	var parseUrl = url.parse(req.url, true),
		date = new Date(parseUrl.query.iso),
		result;

	if (/^\/api\/parsetime/.test(req.url)) {
		result = {
			"hour": date.getHours(),
			"minute": date.getMinutes(),
			"second": date.getSeconds()
		};
	} else if (/^\/api\/unixtime/.test(req.url)) {
		result = {
			"unixtime": date.getTime()
		};
	}

	if (result) {
		resp.writeHead(200, {
			'Content-Type': 'appliaction/json'
		});
		resp.end(JSON.stringify(result));
	} else {
		resp.writeHead(404);
		resp.end();
	}
});

server.listen(port);