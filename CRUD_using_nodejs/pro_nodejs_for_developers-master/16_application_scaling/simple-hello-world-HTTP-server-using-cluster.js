var http = require("http");
var cluster = require("cluster");
var numCPUs = require("os").cpus().length;

// simmilar method isWorker exists
if (cluster.isMaster){
	for (var i = 0; i < numCPUs; i++) {
		console.log("Forking child");
		cluster.fork();
	}
} else {
	http.createServer(function(request, response){
		console.log(process.pid + ": request for " + request.url);
		response.writeHead(200);
		response.end("Hello World!");
	}).listen(8000);	
}