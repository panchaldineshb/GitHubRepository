function isNegative(n, cb) {
	if ( n < 0 ) {
		process.nextTick(function() {
			cb(true);
		});
	}
	cb(false);
}

// This script suffers of two major problems
// - True path is asynchronous while false path is synchronous
// - in case when n is negative the calbback function is executed twice,
//   first time after scheduling nextTick, the second time when nextTick
//   callback is excuted