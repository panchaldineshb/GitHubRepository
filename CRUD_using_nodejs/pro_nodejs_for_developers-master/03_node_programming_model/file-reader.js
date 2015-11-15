var fs = require('fs');

fs.readFile("foo.txt", "utf-8", function(error, data){
	if (error) {
		throw error;
	}

	console.log(data);

});

console.log("Reading file...");