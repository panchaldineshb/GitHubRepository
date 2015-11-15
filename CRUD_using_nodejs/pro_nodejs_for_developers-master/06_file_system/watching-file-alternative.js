var fs = require('fs');
var path = __dirname + "/foo.txt";
var watcher;

watcher = fs.watch(path);
watcher.on("change", function(event, filename){
	if (event === "rename") {
		console.log("The file was renamed/deleted.");
	} else if (event === "change") {
		console.log("The file was changed.");
	}

	watcher.close();
});

// Node’s official documentation lists watch() as unstable because it depends on the underlying file system and
// is not implemented with 100 percent consistency across platforms. For example, the filename argument of the watch()
// callback function is not available in all systems.