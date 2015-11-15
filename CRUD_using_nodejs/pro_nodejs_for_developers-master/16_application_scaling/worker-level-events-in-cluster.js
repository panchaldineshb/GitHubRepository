var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;
var worker;

if (cluster.isMaster){
	for(var i = 0; i < numCPUs; i++){
		worker = cluster.fork();

		worker.on("online", function(){
			console.log("Worker " + worker.id + " is online");
		});

		worker.on("disconnect", function(){
			console.log("Worker " + worker.id + " disconnected");
		});

		worker.on("exit", function(code, signal){
			console.log("Worker " + worker.id + " exited");
		});

		worker.disconnect();
	}	
} else {
	// implement worker code
}