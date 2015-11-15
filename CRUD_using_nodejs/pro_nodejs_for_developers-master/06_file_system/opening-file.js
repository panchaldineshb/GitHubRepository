var fs = require('fs');
var path = "/dev/null";

fs.open(path, "w+", function(error, fd) {
	if (error) {
		console.error("open error: " + error.message);
	} else {
		console.log("Successfully opened " + path);
	}
});