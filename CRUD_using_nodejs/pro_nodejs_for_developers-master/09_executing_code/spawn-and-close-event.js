var cp = require("child_process");
var child = cp.spawn("ls");

child.on("close", function(code, signal) {
	console.log("exit code: " + code);
	console.log("exit signal: " + signal);
});