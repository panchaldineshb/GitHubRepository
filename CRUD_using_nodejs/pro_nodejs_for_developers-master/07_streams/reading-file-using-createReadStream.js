var fs = require("fs");
var stream;

stream = fs.createReadStream(__dirname + "/foo.txt");

stream.on("data", function(data) {
	var chunk = data.toString();

	process.stdout.write(chunk);
});

stream.on("end", function() {
	console.log
});