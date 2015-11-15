var cp = require("child_process");
var child = cp.fork(__dirname + "/child-process");

child.on("message", function(message) {
	console.log("parent received: " + message.count);

	if (child.connected) {
		message.count++;
		child.send(message);
	}
});

child.on("SIGINT", function() {
	child.kill();
	process.exit();
});

child.send({
	count: 0
});