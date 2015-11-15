var mongoose = require("mongoose");
var connection = mongoose.createConnection("mongodb://localhost/test");
var Person = require(__dirname + "/defining-model-mongodb.js").getModel(connection);