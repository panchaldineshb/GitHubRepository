var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PersonSchema = new Schema({
    SSN: String,
    LastName: String,
    FirstName: String,
    Gender: String,
    City: String,
    State: String,
    Vehicles: [{
        VIN: Number,
        Type: String,
        Year: Number
    }]
});

module.exports = {
    getModel: function getModel(connection) {
        return connection.model("Person", PersonSchema);
    }
};