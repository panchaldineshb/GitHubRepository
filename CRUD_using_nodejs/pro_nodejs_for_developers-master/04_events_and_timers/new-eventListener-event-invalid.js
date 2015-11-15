var events = require('events');
var emitter = new events.EventEmitter();

emitter.on("newListener", function(date){
	console.log(date.getTime());
});

emitter.emit("newListener", new Date());

// here it should explode as it generates newListener event but without a date
emitter.on("foo", function() {});