var net = require('net');
var client = net.connect({
	port: 8000,
	host: "localhost",
	allowHalfOpen: true
});

client.on("end", function() {
	console.log("end handler");
	client.end();
});

client.on("close", function(error){
	console.log("close handler");
	console.log("had error: "+ error);
});