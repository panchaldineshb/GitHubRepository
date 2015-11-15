var http = require('http');
var connect = require('connect');
var bodyParser = require('body-parser');
var app = connect();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(request, response, next) {
	var body = request.body;

	for (b in body) {
		response.write(b + ' = ' + body[b] + "\n");
	}

	response.end();
});

http.createServer(app).listen(8000);