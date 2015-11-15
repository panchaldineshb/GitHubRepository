var cp = require("child_process");
var child = cp.spawn("ls", ["-l", "/"]);

child.stdout.on("data", function(data) {
	process.stdout.write(data.toString());
});