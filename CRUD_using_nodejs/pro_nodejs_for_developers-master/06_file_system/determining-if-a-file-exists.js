var fs = require('fs');
var path = '/';

var existsSync = fs.existsSync(path);

fs.exists(path, function(exists) {
	if (exists !== existsSync) {
		console.error("Something is wrong!");
	} else {
		console.log(path + " exists: " + exists);
	}
});