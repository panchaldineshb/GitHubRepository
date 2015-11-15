var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");
var Person = require(__dirname + "/defining-model-mongodb.js").getModel(connection);

connection.on("open", function() {
   Person.remove({
       City: "San Diego"
   }, function(error, response){
       connection.close();
       
       if (error) {
           return console.error(error);
       }
       
       console.log(response);
   });
});