var fs = require('fs');
var path = __dirname + "/foo.txt";
var data = "Loremipsum dolor sit amet";

fs.open(path, "w", function(error, fd) {
	var buffer = new Buffer(data);

	fs.write(fd, buffer, 0, buffer.length, null, function(error, written, buffer) {
		if (error) {
			console.error("write error: " + error.message);
		} else {
			console.log("Successfully wrote " + written + " bytes.");
		}
	});
});