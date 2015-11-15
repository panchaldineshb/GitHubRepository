var vm = require("vm");
var code = "console.log(foo);";
// This is global variable (no var)
foo = "Hello vm";
vm.runInThisContext(code);