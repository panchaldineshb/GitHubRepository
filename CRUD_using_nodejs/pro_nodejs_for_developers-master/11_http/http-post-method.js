var http = require('http');
var qs = require('qs');
var body = qs.stringify({
	foo: "bar",
	baz: [1, 2]
});
var request = http.request({
	hostname: "localhost",
	port: 8000,
	path: "/",
	method: "POST",
	headers: {
		"Host": "localhost:8000",
		"Content-Type": "application/x-ww-form-urlencoded",
		"Content-Length": Buffer.byteLength(body)
	}
}, function(response){
	response.setEncoding("utf-8");

	response.on("data", function(data){
		process.stdout.write(data);
	});

	response.on("end", function(){
		console.log();
	});
});

request.end(body);