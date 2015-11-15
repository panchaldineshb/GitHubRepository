var fs = require('fs');

fs.readFile("", "utf-8", function(error, data) {
	if (error) {
		throw error;
	}

	console.log(data);
});

// Should be used only to grafully terminate script
// Exception leaves the script in an indetermine state
// Attempting to move on from such state can bring additional errors.

process.on("uncaughtException", function(error) {
	console.log("The exception was caught!");
});