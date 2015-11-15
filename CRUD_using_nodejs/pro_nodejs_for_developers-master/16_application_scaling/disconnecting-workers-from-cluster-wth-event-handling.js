var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {

	cluster.on("disconnect", function(worker){
		console.log("Worker " + worker.id + " disconnected");
	});

	cluster.on("exit", function(worker, code, signal){
		var exitCode = worker.process.exitCode;

		console.log("Worker " + worker.id + " exited with code " + exitCode);
	});

	for (var i = 0; i < numCPUs; i++){
		cluster.fork();
	}

	cluster.disconnect();
} else {
	// implement the worker code
}