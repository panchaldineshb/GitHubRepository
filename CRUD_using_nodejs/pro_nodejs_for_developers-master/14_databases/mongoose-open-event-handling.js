var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");

connection.on("open", function(){
	console.log("Connection established");
	connection.close();
});