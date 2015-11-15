var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");
var Person = require(__dirname + "/defining-model-mongodb.js").getModel(connection);

connection.on("open", function() {
    Person.find({
        City: "Las Vegas"
    })
    .where("LastName").equals("Doe")
    .limit(10)
    .sort("LastName -FirstName")
    .select("FirstName LastName")
    .exec(function(error, results){
        connection.close();
        
        if (error) {
            return console.error(error);
        }
        
        console.log(results);
    });
});