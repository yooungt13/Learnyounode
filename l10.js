var net = require('net');
var server = net.createServer(function(socket) {
	// socket handling logic
	var date = new Date();
	var curr = date.getFullYear() 
	   + "-" + ( (date.getMonth() < 9) ? "0" + (date.getMonth() + 1): date.getMonth() + 1 )
	   + "-" + ( (date.getDate() < 10) ? "0" + date.getDate(): date.getDate() )
	   + " " + date.getHours()
	   + ":" + date.getMinutes();

	socket.end(curr);
});

server.listen(process.argv[2]);