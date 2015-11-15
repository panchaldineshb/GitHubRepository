var net = require('net');
var server = net.createServer(function(socket){
	// handle connection
});

// ::1 means localhost in IPv6

server.listen(0, "::1", function(){
	var address = server.address();

	console.log(address);
});