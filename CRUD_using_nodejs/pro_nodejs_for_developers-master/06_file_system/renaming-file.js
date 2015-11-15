var fs = require('fs');
var oldPath = __dirname + "/foo.txt";
var newPath = __dirname + "/bar.txt";

fs.rename(oldPath, newPath, function(error) {
	if (error) {
		console.error("rename error: " + error.message);
	} else {
		console.log("Successfully renamed the file!");
	}
});