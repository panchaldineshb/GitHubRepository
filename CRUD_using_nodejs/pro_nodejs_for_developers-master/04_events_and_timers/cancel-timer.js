var timeoutId = setTimeout(function() {
	console.log("In timeout function");
}, 1000);

// Timer can be cancelled using timeoutId which is returned by setTimeout function
clearTimeout(timeoutId);