var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
	cluster.on("fork", function(worker){
		console.log("Attempting to fork worker");
	});

	cluster.on("online", function(worker){
		console.log("Successfully forked worker");
	});

	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}
} else {
	// implement worker code
}