var vm = require("vm");
var script = vm.createScript("i++;","example.vm");
var sandbox = {
	i: 0
}

for (var i=0; i < 10; i++) {
	script.runInNewContext(sandbox);
}

console.log(sandbox);