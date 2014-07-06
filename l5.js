var fs = require('fs'),
	path = require('path');

fs.readdir(process.argv[2], function(err, files) {
	for (var i = 0, len = files.length; i < len; i++) {
		//console.log(path.extname(files[i]) + '/' + process.argv[3]);
		if (path.extname(files[i]) == '.' + process.argv[3])
			console.log(files[i]);
	}
});