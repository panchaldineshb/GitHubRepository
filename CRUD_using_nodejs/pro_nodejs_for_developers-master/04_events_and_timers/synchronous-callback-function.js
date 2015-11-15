function add(x, y, cb){
	cb(x + y);
}

add(2, 3, console.log);
console.log("The sum is: ");

// It won't work as it is really the synchronous callback
// Making callback does not force the function to be asynchronous