var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++){
		cluster.fork();
	}

	cluster.disconnect(function(){
		console.log("All workers have disconnected");		
	});
} else {
	// implement the worker code
}