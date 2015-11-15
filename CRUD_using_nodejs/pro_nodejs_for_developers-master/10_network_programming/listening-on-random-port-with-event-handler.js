var net = require('net');
var server = net.createServer(function(socket){
	// handle connections
});

// 0 as a first argument to listen() means listening on a random port
// second adrgument, anonymous function is a event handler
// here used to display port

// event handler for listening can be exchanged with on() method and 
// "listening" event

server.listen(0, function(){
	var address = server.address();

	console.log('Listening on port ' + address.port);
});