var fs = require('fs'),
	path = require('path');

module.exports = function(dir, filter, callback) {

	fs.readdir(dir, function(err, files) {
		if(err) 
			return callback(err);

		var results = [];
		for (var i = 0, len = files.length; i < len; i++) {
			if (path.extname(files[i]) == '.' + filter)
				results.push(files[i]);
		}
		callback(null,results);
	});

}