var http = require('http');
var connect = require('connect');
var qs = require('qs');
var app = connect();

// This step must have been modificated as connect.query() is no longer supported
app.use(function(request, response, next){
	//console.log(request);
	if (!request.query) {
      request.query = ~request.url.indexOf('?') ? qs.parse(request._parsedUrl.query) : {};
    }
    next();
});

app.use(function(request, response, next){
	var query = request.query;

	for (q in query) {
		console.log(q + " = " + query[q]);
	}
	next();
});

app.use(function(request, response, next) {
	response.setHeader("Connect-Type","text/html");
	response.end("Hello <strong>HTTP</strong>!");
});

http.createServer(app).listen(8000);