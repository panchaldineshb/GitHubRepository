var http = require("http");
var connect = require("connect");
var serverStatic = require('serve-static');
var app = connect("connect");
var WebSocketServer = require("ws").Server;
var server;
var wsServer;

app.use(serverStatic("public"));
server = http.createServer(app);
wsServer = new WebSocketServer({
	server: server
});

wsServer.on("connection", function(ws){
	ws.on("message", function(message, flags){
		ws.send(message, flags);
	});
});

server.listen(8000);