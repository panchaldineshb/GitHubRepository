var cp = require("child_process");
var child;

child = cp.fork(__dirname + "/fork-child-module", ["-foo"], {
	cwd: "/",
	env: {
		bar: "baz"
	}
});

console.log("parent pid: ", process.pid);
