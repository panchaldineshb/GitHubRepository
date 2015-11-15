var net =  require('net');
var server = net.createServer({
	// server leaves client connections open even if the client terminate them
	// such connection becomes nonreadable but still writeable by server
	// such connection must be explicitly closed by the server no matter what 
	// client does
	allowHalfOpen: false
}, function(socket){
	// handle connection
});