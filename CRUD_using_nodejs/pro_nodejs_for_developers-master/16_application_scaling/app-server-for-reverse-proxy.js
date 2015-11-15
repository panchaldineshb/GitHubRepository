var http = require("http");
var port = ~~process.argv[2];

http.createServer(function(request, response){
	console.log(process.pid + ": request for " + request.url);
	response.writeHead(200);
	response.end("Hello World!");
}).listen(port);