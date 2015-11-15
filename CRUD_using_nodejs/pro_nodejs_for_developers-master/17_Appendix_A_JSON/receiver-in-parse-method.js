receiver1 = function(key,value){
	// check for the top level object
	if (key === "") {
		// be sure to return the top level object
		// otherwise the constructed object will be undefined
		return value;
	} else {
		// retur the original untransformed value
		return value;
	}
}

function square(key, value) {
	if (key === "") {
		return value;
	} else {
		return value * value;
	}
}

var string = "{\"foo\":10, \"bar\":20}";
var obj = JSON.parse(string, square);

console.log(obj.foo);
console.log(obj.bar);

// Both JSON.parse() and JSON.stringify() are synchronous methods that can throw exceptions
// try and catch statement should be used.
