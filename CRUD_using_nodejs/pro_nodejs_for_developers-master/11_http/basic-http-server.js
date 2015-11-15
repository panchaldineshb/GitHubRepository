var http = require("http");
var server = http.createServer(function(request, response){
	response.write("Hello <strong>HTTP</strong>!");
	response.end();
});

// Binding server to a port
server.listen(8000);