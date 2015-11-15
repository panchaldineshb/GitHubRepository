var vm = require("vm");
var code = "console.log(foo); foo = 'Goodbye';";

foo = "Hello vm";
vm.runInThisContext(code);
console.log(foo);

// Code passed as string can change global variable foo