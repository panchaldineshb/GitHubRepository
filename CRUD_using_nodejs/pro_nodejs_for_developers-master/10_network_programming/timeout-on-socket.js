var net = require('net');
var client = net.connect(8000, "localhost");

client.setTimeout(10000, function() {
	console.error("Ten second timeout elapsed");
	client.end();
});