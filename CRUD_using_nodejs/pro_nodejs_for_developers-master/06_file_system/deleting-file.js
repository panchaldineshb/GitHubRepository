var fs = require('fs');
var path = __dirname + "/bar.txt";

fs.unlink(path, function(error) {
	if (error) {
		console.error("unlink error: " + error.message);
	}
});