var http = require('http'),
	bl = require('bl');

var result = [],
	isOne = isTwo = isThree = 0;

http.get(process.argv[2], function(resp) {
	resp.pipe(bl(function(err, data) {
		result[0] = data.toString();
		isOne = 1;

		if (isOne * isTwo * isThree) {
			for (var i = 0; i < 3; i++) {
				console.log(result[i]);
			}
		}
	}));
});

http.get(process.argv[3], function(resp) {
	resp.pipe(bl(function(err, data) {
		result[1] = data.toString();
		isTwo = 1;

		if (isOne * isTwo * isThree) {
			for (var i = 0; i < 3; i++) {
				console.log(result[i]);
			}
		}
	}));
});

http.get(process.argv[4], function(resp) {
	resp.pipe(bl(function(err, data) {
		result[2] = data.toString();
		isThree = 1;

		if (isOne * isTwo * isThree) {
			for (var i = 0; i < 3; i++) {
				console.log(result[i]);
			}
		}
	}));
});