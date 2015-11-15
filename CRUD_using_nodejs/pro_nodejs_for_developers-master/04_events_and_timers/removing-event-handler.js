var events = require('events');
var emitter = new events.EventEmitter();

function handler() {
	console.log("In foo handler");
}


emitter.on("foo", handler);

// here function must be named - it doesn't work for anonymous functions

emitter.removeListener("foo", handler);
// also removeAllListeners() can be used to remove all listeners at once

emitter.emit("foo");