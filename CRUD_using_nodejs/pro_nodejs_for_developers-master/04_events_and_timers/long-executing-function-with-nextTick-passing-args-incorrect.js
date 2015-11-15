process.nextTick(function(f, b){
	console.log(f + " " + b);
});
// prints "undefined undefined" as there is no way 
// to pass arguments to callback function