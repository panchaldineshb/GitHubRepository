var events = require('events');
var emitter = new events.EventEmitter();
var username = "colin";
var password = "password";

// add the user
// then emit an event
emitter.emit("userAdded", username, password);