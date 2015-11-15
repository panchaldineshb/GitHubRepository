var dgram = require('dgram');
var socket = dgram.createSocket("udp4", function(msg, rinfo){
	console.log("Received data");
});