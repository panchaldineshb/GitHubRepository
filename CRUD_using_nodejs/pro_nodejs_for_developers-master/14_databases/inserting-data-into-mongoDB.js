var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");
var Person = require(__dirname + "/defining-model-mongodb.js").getModel(connection);

connection.on("open", function() {
    var person = new Person({
        SSN: "123-45-6789",
        LastName: "Pluck",
        FirstName: "Peter",
        Gender: "M",
        City: "Pittsburgh",
        State: "PA",
        Vehicles: [ 
            {
                VIN: 12345,
                Type: "Jeep",
                Year: 2014
            },
            {
                VIN: 98032,
                Type: "Car",
                Year: 2006
            }
        ]
    });    

    person.foo = "bar";
    person.save(function(error) {
        connection.close();
    
        if (error) {
            return console.error(error);
        } else {
            console.log("Successfully saved!");
        }
    });
});