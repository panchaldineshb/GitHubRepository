var express = require("express");
var http = require("http");
var app = express();

app.get("/products/:productId(\\d+)", function(req, res, next){
    res.send("Requested " + req.params.productId);
});

http.createServer(app).listen(8000);