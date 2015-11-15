var fs = require('fs');

// This example shows that try/catch/finally statements
// have no use in case of asynchronous code
// By the time the callback function is executed, try and catch
// statement is no longer a part of call stack and the exception 
// is left uncaught

try {
	fs.readFile("", "utf-8", function(error, data) {
		if (error) {
			throw error;
		}

		console.log(data);
	});
} catch (exception) {
	console.log("The exception was caught!");
}