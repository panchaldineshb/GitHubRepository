// This version is shorter but request method and headers cannot be specified

var http = require('http');
var request = http.request("http://localhost:8000/", function(response){
	response.setEncoding("utf-8");

	response.on("data", function(data){
		process.stdout.write(data);
	});

	response.on("end", function() {
		console.log();
	});
});

request.end();