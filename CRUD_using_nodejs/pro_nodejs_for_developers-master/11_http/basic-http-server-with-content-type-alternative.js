var http = require("http");
var server = http.createServer(function(request, response){
	// must be done before write and end and once per response
	response.writeHead(200, {
		"Content-Type": "text/html"
	});
	response.write("Hello <strong>HTTP</strong>!");
	response.end();
});

// Binding server to a port
server.listen(8000);