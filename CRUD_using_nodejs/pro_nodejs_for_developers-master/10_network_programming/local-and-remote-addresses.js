var net = require('net');
var client = net.connect(8000, function() {
	console.log("Local endpoint " + client.localAddress + ":" + client.localPort);
	console.log("is connected to");
	console.log("Remote endpoint " + client.remoteAddress + ":" + client.remotePort);
});