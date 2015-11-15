var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");
var Person = require(__dirname + "/defining-model-mongodb.js").getModel(connection);

// other options to update (third argument)
// - safe - if true errors are passed to callback
// - upsert - if true document is created if does not exist
// - multi - if true multiple documents can be updated with single operation
// - strict - if true additional data (not defined in schema) are not written to DB

connection.on("open", function(){
    Person.update({
        City: "Las Vegas"
    },{
        City: "New York"
    },{
        multi: true
    }, function(error, numberAffected, rawResponse){
        connection.close();
        
        if (error) {
            return console.error(error);
        }
        
        console.log(numberAffected + " documents affected");
        console.log(rawResponse);
    });
});