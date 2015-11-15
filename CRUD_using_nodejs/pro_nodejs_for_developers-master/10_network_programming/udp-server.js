var dgram = require('dgram');
var server = dgram.createSocket("udp4", function(msg, rinfo){
	console.log('received ' + rinfo.size + " bytres");
	console.log("from " + rinfo.address + ":" + rinfo.port);
	console.log("message is: " + msg.toString());
});

server.bind(8000);