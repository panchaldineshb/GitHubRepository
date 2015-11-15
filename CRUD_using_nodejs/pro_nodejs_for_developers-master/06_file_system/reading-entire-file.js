var fs = require('fs');
var path = __dirname + "/foo.txt";

fs.readFile(path, "utf-8", function(error, data) {
	if (error) {
		console.error("read error: " + error.message);
	} else {
		console.log(data);
	}
})