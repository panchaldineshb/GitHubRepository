var assert = require("assert");

function divide(numerator, denominator) {
	if (!denominator) {
		throw new RangeError("Division by zero");
	}
	return numerator / denominator;
}

assert.throws(divide.bind(null, 1, 0));
assert.throws(divide.bind(null, 2, 0), RangeError);
assert.throws(divide.bind(null, 3, 0), Error);
assert.throws(divide.bind(null, 4, 0), /Division by zero/);
assert.throws(divide.bind(null, 5, 0), function(error){
	return error instanceof Error && /zero/.test(error.message);
});