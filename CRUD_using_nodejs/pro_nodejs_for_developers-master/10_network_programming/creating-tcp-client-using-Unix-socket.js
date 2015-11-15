var net = require('net');
// connect can be exchanged with another function - createConnection()
var client = net.connect("/tmp/foo1.sock", function() {
	console.log("Connection established");
});