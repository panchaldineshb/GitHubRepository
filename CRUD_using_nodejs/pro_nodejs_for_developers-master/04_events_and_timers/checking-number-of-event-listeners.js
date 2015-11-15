var events = require('events');
var EventEmitter = events.EventEmitter;

// get the EventEmitter constructor from the event module
var emitter = new EventEmitter();

emitter.on("foo", function(){});
emitter.on("foo", function(){});

console.log(EventEmitter.listenerCount(emitter, "foo"));