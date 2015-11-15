replacer1 = function(key, value) {
	// check the top level object
	if (key === "") {
		return value;
	} else {
		return value;
	}
}

replacer2 = function(key, value) {
	if (key === "") {
		return "foo";
	} else {
		// this is now ireelevant
		return value;
	}
}

function filter(key, value) {
	// check the top level object
	if (key === "") {
		return value;
	} else if (typeof value === "number") {
		return value;
	}
}

var obj = {foo: 0, bar: 1, baz: "x"};
var json = JSON.stringify(obj, filter);

console.log(json);
