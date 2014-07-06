var filter = require('./module.js');
//console.log(process.argv[2]);

filter(process.argv[2], process.argv[3], function(err, data) {
	for (var i = 0, len = data.length; i < len; i++) {
		console.log(data[i]);
	}
});