var async = require("async");
var i = 0;

// async.whilst takes 3 arguments/functions
// - syncrhonous truth test (takes no arguments, is checked before each iteration)
// - function that is executed each time when truth test passes (callback as an argument)
// - function that is execited when truth test fails (acts as final callback function)

async.whilst(function() {
	return i < 5;
}, function(callback) {
	setTimeout(function() {
		console.log("i = " + i);
		i++;
		callback(null);
	}, 1000);
}, function(error) {
	console.log("Done!");
})

// Other examples of async loops
// async.doWhilst(body, test, callback)
// async.until(test, body, callback)
// async.doUntil(body, test, callback)

// Other methods:
// memoize() and unmemoize()
// Memoization - technique that increases performance by caching function's computed results
// Input arguments are mapped to the output ina sfotware cache
// Next time the function is called with the same inputs, the cached calue is returned
// instaed of function executin again