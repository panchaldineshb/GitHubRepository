var assert = require("assert");

it("Should return -1 if not found", function() {
	var str = "Hello Mocha!";

	assert.strictEqual(str.indexOf("World"), -1);
	assert.strictEqual(str.indexOf("Goodbye"), -1);
})
