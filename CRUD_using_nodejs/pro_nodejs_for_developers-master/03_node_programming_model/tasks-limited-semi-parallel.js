var async = require("async");

async.parallelLimit({
	one: function(callback) {
		setTimeout(function() {
			console.log("Task 1");
			callback(null, 1);
		}, 300);
	},
	two: function(callback) {
		setTimeout(function() {
			console.log("Task 2");
			callback(null, 2);
		}, 200);
	},	
	three: function(callback) {
		setTimeout(function() {
			console.log("Task 3");
			callback(null, 3);
		}, 100);
	}
}, 2, function(error, results) {
	console.log(results);
});

// parallelLimit() ensure that there are never more than n function executing at once
// but it does not mean that that it executes functions in batches of 2.