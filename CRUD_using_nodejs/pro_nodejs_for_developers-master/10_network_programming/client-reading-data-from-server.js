var net = require('net');
var clientSocket = net.connect({
	port: 8000,
	host: "localhost"
});

clientSocket.setEncoding("utf-8");

clientSocket.on("data", function(data){
	process.stdout.write(data);
});