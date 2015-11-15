process.on("message", function(message) {
	console.log("child received : " + message.count);

	if (process.connected) {
		message.count++;
		process.send(message);
	}
});