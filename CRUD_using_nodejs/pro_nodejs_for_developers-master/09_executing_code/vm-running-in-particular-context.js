var vm = require("vm");
var code = "var bar = 1; console.log(foo); foo = 'Goodbye';";
var context;

foo = "Hello vm";
context = vm.createContext({
	console: console,
	foo: foo
});
vm.runInContext(code, context);
console.log(foo);
console.log(context.foo);
console.log(context.bar);