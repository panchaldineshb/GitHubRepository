var cp = require("child_process");
var child = cp.spawn("ls", ["-l"], {
	cwd: "/",
	stdio: "inherit"
});