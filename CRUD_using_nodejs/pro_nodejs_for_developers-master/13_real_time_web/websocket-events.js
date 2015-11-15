// When WebSocket transitions into the open state, open event is fired

socket.onopen = function(event) {
	// handle open event
}

// Alternative way by attaching an open Event Handler
socket.addEventListener("open", function(event){
	// handle open event
});


// When a WebSocket receives new data, a message event is fired. 
// The received data is available via the data property of the message event
socket.addEventListener("message", function(event) {
	var data = event.data;
	// process data as string, Blob, or ArrayBuffer
	// Two type of data
	// Blob - Binary Large Objects
	// ArrayBuffer
	// Socket can work with one type of data at a time
	// WebSocket's binaryType is used to select between Blob and AraryBuffer
});

// When a WebSocket is closed, a close event is fired
// Event has three properties:
// code - passed from close(),
// reason - passed from close(),
// wasClean - boolean value
socket.addEventListener("close", function(event) {
	var code = event.code;
	var reason = event.reason;
	var wasClean = event.wasClean;
	// handle close event
});

// When a WebSocket encounters a problem, an error event is fired
socket.addEventListener("error", function(event) {
	// handle error event
});

// WebSockets transmit data via send() method which comes in three versions:
// - one sending UTF-8 string data
// - second sending an ArrayBuffer
// - third sending Blob data
socket.send(data);
