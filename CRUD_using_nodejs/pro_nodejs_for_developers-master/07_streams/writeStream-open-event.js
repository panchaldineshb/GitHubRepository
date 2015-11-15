var fs = require("fs");
var stream = fs.createWriteStream(__dirname + "/foo.txt");

stream.on("open", function(fd){
	console.log("File descriptor: " + fd);
});