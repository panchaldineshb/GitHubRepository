// eval can access variables in the local scope

var vm = require("vm");
var code = "console.log(foo);";
var foo = "Hello eval";

eval(code);

// while using runInThisContext local variables are not accessible
// error will be thrown

var vm = require("vm");
var code = "console.log(foo);";
var foo = "Hello vm";

vm.runInThisContext(code, "example.vm");