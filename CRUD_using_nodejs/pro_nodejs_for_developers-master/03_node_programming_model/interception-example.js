var fs = require('fs');
var domain = require('domain').create();

// Inteption takes care of errors either so we don't have to handle them here
fs.readFile("", "utf-8", domain.intercept(function(data) {
	console.log(data);
	domain.dispose();
}));

domain.on("error", function(error){
	console.log("The error was caught!")
});