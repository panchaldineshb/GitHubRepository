var cp = require("child_process");
var child = cp.spawn("cat");

child.on("exit", function(code, signal) {
	console.log("Killed using " + signal);
})

child.kill("SIGTERM");