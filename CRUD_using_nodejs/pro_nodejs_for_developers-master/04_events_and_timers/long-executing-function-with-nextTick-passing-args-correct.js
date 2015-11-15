function getFunction(f, b) {
	return function myNextTick() {
		console.log(f + " " + b);
	};
}

process.nextTick(getFunction("foo", "bar"));