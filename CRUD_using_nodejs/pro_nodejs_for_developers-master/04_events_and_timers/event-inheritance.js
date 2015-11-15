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


