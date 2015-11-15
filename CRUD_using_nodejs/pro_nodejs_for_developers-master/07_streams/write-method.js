var success = process.stdout.write("foo\n", function() {
	console.log("Data was successfully written!");
});

console.log("success = " + success);

// Other methods:
// - end()
// - drain()
// - finish()