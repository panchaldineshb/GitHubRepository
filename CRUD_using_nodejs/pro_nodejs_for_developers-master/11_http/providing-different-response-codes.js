var http = require('http');
http.createServer(function(request, response){
	// successful reponse (200 OK) only for /foo request
	if (request.url === "/foo") {
		response.end("Hello <strong>HTTP</strong>");
	} else {
		response.statusCode = 404;
		response.end();
	}
}).listen(8000);