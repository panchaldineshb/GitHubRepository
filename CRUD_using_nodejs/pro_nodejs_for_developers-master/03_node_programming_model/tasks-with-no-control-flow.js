var results = [];

setTimeout(function() {
	console.log("Task 1");
	results[0] = 1;
}, 300);

setTimeout(function() {
	console.log("Task 2");
	results[0] = 2;
}, 200);

setTimeout(function() {
	console.log("Task 3");
	results[0] = 3;
}, 100);

// There is no control in which order will the tasks be executed
// We cannot handle the errors either