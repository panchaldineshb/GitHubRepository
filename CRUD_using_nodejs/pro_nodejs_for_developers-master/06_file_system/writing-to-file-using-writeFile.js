var fs = require('fs');
var path = __dirname + "/foo.txt";
var data = "Lorem ipsum dolor sit amet alo allo";

fs.writeFile(path, data, function(error) {
	if (error) {
		console.error("write error: " + error.message);
	} else {
		console.log("Successfully wrote " + path);
	}
});

// There are also:
// - appendFile()
// - appendFileSync()
