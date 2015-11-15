// It will crash - no access to console, no access even to global foo variable

var vm = require("vm");
var code = "console.log(foo);";

foo = "Hello vm";
vm.runInNewContext(code);