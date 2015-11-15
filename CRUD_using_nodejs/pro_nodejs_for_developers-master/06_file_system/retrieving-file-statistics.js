var fs = require('fs');
var path = 'foo.txt';


fs.stat(path, function(error, stats) {
	if (error) {
		console.error('stat error: ' + error.message);
	} else {
		console.log(stats);
	}
});