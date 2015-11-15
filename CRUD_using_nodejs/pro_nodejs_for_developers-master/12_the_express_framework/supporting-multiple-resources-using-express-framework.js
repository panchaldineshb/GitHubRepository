var express = require("express");
var http = require("http");
var app = express();

// there are simmilar methods for put, post and delete
app.get("/", function(req, res, next){
    // If first argument is a number, then it is treated as status code
    // If not specified then 200 is sent
    // Content-Type is also set dependign on the type fo the object
    // If response body is a buffer then content-type is set to application/octet-stream
    // If response body is a string then content-type is set to text/html
    // If response body is array or object then content-type is set to JSON
    // If not body is provided then status code's reason phrase is used
	res.send("Hello <strong>home page</strong>");
});

app.get("/foo", function(req, res, next){
	res.send("Hello <strong>foo</strong>");
});

app.get("/bar", function(req, res, next){
	res.send("Hello <strong>bar</strong>");
});

http.createServer(app).listen(8000);

