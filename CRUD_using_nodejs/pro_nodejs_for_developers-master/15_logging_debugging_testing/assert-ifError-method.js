var assert = require("assert");

// Successful assertion
assert.ifError(null);

// Failed assertion
assert.ifError(new Error("error"));