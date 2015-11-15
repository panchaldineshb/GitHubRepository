var commander = require('commander');

// Unfortuantelly prompt() doesn't work - it has been moved to another module
commander.prompt("What is your name? ", function(name) {
	console.log("You said your name is " + name);
	process.stdin.pause();
});

// Unfortuantelly confirm() doesn't work - it has been moved to another module
commander.confirm("Conitue?", function(proceed){
	console.log("Your response was " + proceed);
	process.stdin.pause();
});

// Unfortuantelly password() doesn't work - it has been moved to another module
commander.password("Password: ", function(password) {
	console.log("I know your password! It's " + password);
	process.stdin.pause();
})

// Unfortuantelly prompt() doesn't work - it has been moved to another module
var list = ["foo", "bar", "baz"];
commander.choose(list, function(index) {
	console.log("You selected " + list[index]);
	process.stdin.pause();
});