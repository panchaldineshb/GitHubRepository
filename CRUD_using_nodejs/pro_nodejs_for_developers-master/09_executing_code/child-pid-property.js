var cp = require("child_process");
var child = cp.spawn("ls");

console.log(child.pid);