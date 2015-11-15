var http = require('http');

http.get("http://localhost:8000", function(response){
	response.setEncoding("utf-8");

	response.on("data", function(data){
		process.stdout.write(data);
	});

	response.on("end", function(){
		console.log();
	});
});