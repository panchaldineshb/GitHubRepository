var fs = require('fs');
var path = __dirname + "/foo";

fs.mkdir(path, function(error) {
	if (error) {
		console.error("mkdir error: " + error.message);
	} else {
		path += "/bar";
		fs.mkdir(path, function(error) {
			if (error) {
				console.error("mkdir error: " + error.message);	
			} else {
				console.log("Successfully built " + path);
			}
		});
	}
});