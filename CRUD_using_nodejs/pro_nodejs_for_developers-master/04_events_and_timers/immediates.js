// Immediates are used to schedule a callback function for immediate execution
// This allows a function to be scheduled directly after currently exeucting function

var immediateId = setImmediate(function() {
	console.log("In immediate function");
});

// Immediates can be cleared
clearImmediate(immediateId);
