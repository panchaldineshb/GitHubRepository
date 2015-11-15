var http = require("http");
var connect = require("connect");
var serverStatic = require('serve-static');
var socketio = require("socket.io");
var app = connect();
var server;
var io;

app.use(serverStatic("public"));
server = http.createServer(app);
io = socketio.listen(server);

io.on("connection", function(socket){
	socket.on("message", function(data){
		socket.emit("echo", data);
	});
});

server.listen(8000);