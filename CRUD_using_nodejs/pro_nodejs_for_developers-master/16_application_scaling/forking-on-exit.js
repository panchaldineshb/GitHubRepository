var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster){
	cluster.on("exit", function(worker, code, signal){
		// determine that a crasg occurred
		var crash = true;

		if (crash) {
			console.log("Restarting worker");
			cluster.fork();
		}
	});

	for (var i = 0; i < numCPUs; i++){
		cluster.fork();
	}
} else {
	// implement worker code
}