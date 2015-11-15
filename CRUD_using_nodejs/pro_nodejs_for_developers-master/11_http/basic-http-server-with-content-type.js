var http = require("http");
var server = http.createServer(function(request, response){
	response.setHeader("Content-Type", "text/html");
	response.write("Hello <strong>HTTP</strong>!");
	response.end();
});

// Binding server to a port
server.listen(8000);