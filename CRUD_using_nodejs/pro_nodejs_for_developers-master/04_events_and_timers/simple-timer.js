// Arguments after miliseconds are the arguments that will be 
// passed to callback function after the timer expires

setTimeout(function(foo, bar) {
	console.log(foo + " " + bar);
}, 1000, "foo", "bar");

