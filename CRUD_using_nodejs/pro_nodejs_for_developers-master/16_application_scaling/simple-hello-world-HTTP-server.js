var http = require("http");

http.createServer(function(request, response){
	console.log(process.pid + ": request for " + request.url);
	response.writeHead(200);
	response.end("Hello World!");
}).listen(8000);