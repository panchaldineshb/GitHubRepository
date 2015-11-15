var async = require("async");

async.series([
	function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(new Error("Problem in Task 1"), 1);
		}, 300);
	},
	function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 200);
	}
], function(error, results) {
	if (error) {
		console.log(error.toString());
	} else {
		console.log(results);
	}
});

// Tasks are excuted semi parallel, semi - because Node is one threaded engine
// Parallel() method attepts to execute all of the functions passes to it
// as soon as possible