var net = require("net");
var client = net.connect({
	port: 8000,
	host: "localhost"
}, function() {
	console.log("Connection established");
});