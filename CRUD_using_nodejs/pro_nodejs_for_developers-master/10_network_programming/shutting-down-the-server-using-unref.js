var net = require('net');
var server = net.createServer();

server.listen();
server.unref();