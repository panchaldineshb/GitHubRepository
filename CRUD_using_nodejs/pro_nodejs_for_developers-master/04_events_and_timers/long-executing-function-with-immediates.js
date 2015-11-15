
var i = 0;

function compute() {
	if (i < 1000000000) {
		// perform some computation
		i++;
		setImmediate(compute);
	}
}

compute();
console.log("compute() still working...");