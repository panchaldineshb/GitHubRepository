var http = require('http');
var request = http.request({
	hostname: "localhost",
	port: 8000,
	path: "/",
	method: "GET",
	headers: {
		"Host": "localhost:8000"
	}
}, function(response){
	var statusCode = response.statusCode;
	var headers = response.headers;
	var statusLine = "HTTP/" + response.httpVersion + " " + statusCode + " " + 
						http.STATUS_CODES[statusCode];

	console.log(statusLine);

	for (header in headers) {
		console.log(header + ": " + headers[header]);
	}

	console.log();
	response.setEncoding("utf-8");
	response.on("data", function(data) {
		process.stdout.write(data);
	});

	response.on("end", function() {
		console.log();
	});
});

request.end();