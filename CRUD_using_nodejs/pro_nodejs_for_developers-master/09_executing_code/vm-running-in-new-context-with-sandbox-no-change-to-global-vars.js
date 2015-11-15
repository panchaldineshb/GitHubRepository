var vm = require("vm");
var code = "var bar = 1; console.log(foo); foo = 'Goodbye';";
var sandbox;

foo = "Hello vm";
sandbox = {
	console: console,
	foo: foo
};
vm.runInNewContext(code, sandbox);
console.log(foo);
console.log(sandbox.foo);
console.log(sandbox.bar);