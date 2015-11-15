var events = require('events');
var emitter = new events.EventEmitter();

emitter.once("foo", function() {
	console.log("In foo handler");
});

emitter.emit("foo");
emitter.emit("foo");