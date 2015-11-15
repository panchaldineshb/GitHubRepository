var fs = require('fs');
var domain = require('domain').create();

// We can bind the callback invoked later to the specific domain
fs.readFile("", "utf-8", domain.bind(function(error, data) {
	if (error) {
		throw error;
	}

	console.log(data);
	domain.dispose();
}));

domain.on("error", function(error) {
	console.log("THe exception was caught!")
});