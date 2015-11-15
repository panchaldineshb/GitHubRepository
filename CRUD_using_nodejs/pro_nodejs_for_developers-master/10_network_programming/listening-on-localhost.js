var net = require('net');
var server = net.createServer(function(socket){
	// handle connection
});

// This server on listens on localhost, no remote connections allowed
server.listen(8000, "127.0.0.1");