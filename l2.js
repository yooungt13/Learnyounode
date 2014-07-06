//console.log(process.argv);

var argvs = process.argv,
	sum = 0;

for (var i = 2, len = argvs.length; i < len; i++) {
	sum += Number(argvs[i]);
}

console.log(sum);