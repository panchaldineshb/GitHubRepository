var net = require('net');
// connect can be exchanged with another function - createConnection()
var client = net.connect(8000, "localhost", function() {
	console.log("Connection established");
});