var fs = require("fs");
var path = __dirname + "/foo.txt";

// This example reads an entire file in one call to read(). If the file is significantly
// large, memory consumption could be a problem. In this case, the application should
// initialize a samller buffer and read the file in smaller chunks using a loop.

fs.stat(path, function(error, stats) {
	fs.open(path, "r", function(error, fd) {
		var buffer = new Buffer(stats.size);
		fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
			var data = buffer.toString("utf-8");

			console.log(data);
		});
	});
});