var vm = require("vm");
var code = "console.log(foo);";
var sandbox;

foo = "Hello vm";
sandbox = {
	console: console,
	foo: foo
};
vm.runInNewContext(code, sandbox);