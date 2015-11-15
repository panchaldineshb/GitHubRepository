var EventEmitter = require('events').EventEmitter;
var util = require('util');

function UserEventEmitter() {

	EventEmitter.call(this);

	this.addUser = function(username, password) {
		// add the user
		// then emit an event
		this.emit("userAdded". username, password);
	};
};

util.inherits(UserEventEmitter, EventEmitter);

var user = new UserEventEmitter();
var username = "colin";
var password = "password";

user.on("userAdded", function(username, password) {
	console.log("Added user " + username);
});

user.addUser(username, password);
console.log(user instanceof EventEmitter);