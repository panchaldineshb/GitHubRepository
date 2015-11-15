var intervalId = setInterval(function() {
	console.log("In interval function");
}, 1000);

// If the interval is the only item scheduled in the event loop and prevents script from terminating
// it can be stopped by making unreference
intervalId.unref();
// But it can be brouhgt back by reefrencing again 
intervalId.ref();
