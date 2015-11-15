var fs = require('fs');
var path = "/dev/null";

fs.open(path, "w+", function(error, fd) {
	if (error) {
		console.error("open error: " + error.message);
	} else {
		fs.close(fd, function(error) {
			if (error) {
				console.error("close error: " + error.message);
			}
		})
	}
});