process.on("message", function(message, server) {
	if (message === 'server') {
		server.on("connection", function(socket){
			socket.end("Handled by child process");
		});
	}
});