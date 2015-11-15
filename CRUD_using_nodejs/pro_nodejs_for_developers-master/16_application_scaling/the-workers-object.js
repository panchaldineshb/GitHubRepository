var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
	for (var i = 0; i < numCPUs; i++) {
		cluster.fork();
	}

	for (var id in cluster.workers) {
		console.log("Killing " + id);
		cluster.workers[id].kill();
	}
}