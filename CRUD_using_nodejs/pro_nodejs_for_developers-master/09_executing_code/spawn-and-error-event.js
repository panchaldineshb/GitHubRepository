var cp = require("child_process");
var child = cp.spawn("ls");

child.on("error", function(error) {
	// process error here
	console.error(error.toString());
})