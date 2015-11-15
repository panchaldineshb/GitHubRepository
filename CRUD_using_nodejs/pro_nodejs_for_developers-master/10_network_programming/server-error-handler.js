var net = require('net');
var server = net.createServer(function(socket){
	// handle connections
});

server.listen();

// EADDRINUSE - error whenport is already in use
// EACCES - error when there are insufficient permissions to bind to a port

server.on("error", function(error) {
	if (error.code === "EADDRINUSE") {
		console.error("Port is already in use");
	}
});