var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var PersonChema = new Schema({
	SSN: String,
	LastName: String,
	FirstName: String,
	Gender: String,
	City: String,
	State: String,
	// noe foreign key operations required - we can add Vehicle directly into Person
	// no JOIN operation needed
	Vehicles: [{
		VIN: Number,
		Type: String,
		Year: Number
	}]
});