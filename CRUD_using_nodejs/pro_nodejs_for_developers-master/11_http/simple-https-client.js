// Supresses any errors thrown beacuse of the server's untrudted certificate
// Should be removed in production environment
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

var https = require('https');
var request = https.request({
	hostname: "localhost",
	port: 8000
}, function(response){
	response.setEncoding("utf-8");

	response.on("data", function(data){
		process.stdout.write(data);
	});

	response.on("end", function() {
		console.log();
	});
});

request.end();
