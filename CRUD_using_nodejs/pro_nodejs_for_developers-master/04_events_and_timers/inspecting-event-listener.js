var events = require('events');
var EventEmitter = events.EventEmitter;
var emitter = new EventEmitter();

emitter.on("foo", function() { console.log("In foo handler");});
emitter.listeners("foo").forEach(function(handler){
	handler();
});