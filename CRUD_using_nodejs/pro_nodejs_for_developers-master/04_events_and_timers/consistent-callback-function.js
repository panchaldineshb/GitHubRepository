function isNegative(n, cb) {

	if ( n < 0 ) {
		return process.nextTick(function() {
			cb(true);
		});
	}

	return process.nextTick(function() {
		cb(false);
	});

}

// Much simplified version

function isNegative2(n, cb) {
	process.nextTick(function() {
		cb(n < 0);
	});
}