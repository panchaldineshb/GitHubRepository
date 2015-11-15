var net = require('net');
var server = net.createServer(function(socket){
	socket.end("Hello and Goodbye!\n");
});

server.listen("/tmp/foo1.sock");