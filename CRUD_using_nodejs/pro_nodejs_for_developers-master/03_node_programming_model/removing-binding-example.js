var domain = require('doamin');
var d1 = domain.create();
var d2 = domain.create();

d1.run(function() {
	var timer = setTimeout(function() {
		throw new Error("test error");
	}, 1);

	// We add timer bound to d1 domain to d2 domain
	d2.add(timer);
	// And remove it from d2 domain
	// But it does not mean that it still bound to d1 domain
	// Exception will go uncaught
	d2.remove(timer);
});

d2.on("error", function(error) {
	console.log("Caught by d2");
});

d1.on("error", function(error) {
	console.log("Caught by d1")
});
