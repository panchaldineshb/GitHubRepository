var assert = require("assert");
var fs = require("fs");

it("Should return true if file exists", function(done){
	var filename = "foo.txt";

	fs.exists(filename, function(exists){
		assert(exists);
		done();
	});
});