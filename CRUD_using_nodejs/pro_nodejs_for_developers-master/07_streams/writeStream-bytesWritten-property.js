var fs = require("fs");
var readStream = fs.createReadStream(__dirname + "/foo.txt");
var writeStream = fs.createWriteStream(__dirname + "/bar.txt");

readStream.pipe(writeStream);

writeStream.on("finish", function() {
	console.log(writeStream.bytesWritten);
});