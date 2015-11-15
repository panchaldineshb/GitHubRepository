var cp = require("child_process");
var child = cp.fork(__dirname + "/disconnecting-child-process");

child.on("disconnect", function() {
	console.log("Goodbye from the parent process");
});

child.disconnect();