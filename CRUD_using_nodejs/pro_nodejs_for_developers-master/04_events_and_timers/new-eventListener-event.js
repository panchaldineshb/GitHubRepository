var events = require('events');
var emitter = new events.EventEmitter();

emitter.on("newListener", function(eventName, listener){
	console.log("Added listener for " + eventName + " events");
});

emitter.on("foo", function() {});