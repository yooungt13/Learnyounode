var http = require('http'),
	bl = require('bl');

http.get(process.argv[2],function(resp) {
	resp.pipe(bl(function(err,data){
		console.log(data.toString().length);
		console.log(data.toString());
	}));
});