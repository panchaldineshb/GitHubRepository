var express = require("express");
var http = require("http");
var socketio = require("socket.io");
var serverStatic = require('serve-static');
var app = express();
var server = http.createServer(app);
var io = socketio.listen(server);

app.use(serverStatic("public"));

app.get("/foo", function(req, res, next){
	res.send(200, {
		body: "Hello from foo!"
	});
});

io.on("connection", function(socket){
	socket.on("message", function(data){
		socket.emit("echo", data);
	});
});

server.listen(8000);