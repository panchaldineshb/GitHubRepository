var assert = require("assert");

function divide(numerator, denominator) {
	if (!denominator) {
		throw new RangeError("Division by zero");
	}
	return numerator / denominator;
}

assert.throws(divide.bind(null, 1, 1));
assert.throws(divide.bind(null, 2, 0), TypeError);
assert.throws(divide.bind(null, 3, 0), /foo/);
assert.throws(divide.bind(null, 4, 0), function(error){
	return false;
});

// There is also opposite method
// doesNotThrow()
