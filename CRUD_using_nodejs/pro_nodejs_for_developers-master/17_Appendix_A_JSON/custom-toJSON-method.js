var obj = {foo: 0, bar: 1, baz: 2};

obj.toJSON = function() {
	var copy = {};

	for (var key in this) {
		if (key === "foo") {
			continue;
		} else {
			copy[key] = this[key];
		}
	}
	return copy;
};

var json = JSON.stringify(obj);
console.log(json);