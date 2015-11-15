var dgram = require("dgram");
var server = dgram.createSocket("udp4");

server.bind(8000, function() {
	console.log("bound to ");
	console.log(server.address());
});