var async = require("async");

// Handler takes two arguments: task and a callback function
// In assumption callback takes error as a first argument

var queue = async.queue(function(task, callback) {
	// process the task argument
	console.log(task);
	callback(null);
}, 4);

var i = 0;

// Adding tasks to the queue together with callback function that will 
// be invokred when the task is handled

setInterval(function() {
	queue.push({
		id: i
	}, function(error) {
		console.log("Finished a task");
	});
	i++;
}, 200);

// Callback functions that are invoked when specific events happen
// like queue gets full, empty, drain
// empty - last task removed from queue
// drain - last task completely processed

queue.saturated = function() {
	console.log("Queue is staurated");
}

queue.empty = function() {
	console.log("Queue is empty");
}

queue.drain = function() {
	console.log("Queue is drained")
}