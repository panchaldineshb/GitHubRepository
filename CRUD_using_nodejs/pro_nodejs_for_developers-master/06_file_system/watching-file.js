var fs = require('fs');
var path = __dirname + "/foo.txt";

fs.watch(path, {
	persistent: true
}, function(event, filename){
	if (event === "rename") {
		console.log("The file was renamed/deleted.");
	} else if (event == "change") {
		console.log("The file was changed.");
	}
});

// Node’s official documentation lists watch() as unstable because it depends on the underlying file system and
// is not implemented with 100 percent consistency across platforms. For example, the filename argument of the watch()
// callback function is not available in all systems.
