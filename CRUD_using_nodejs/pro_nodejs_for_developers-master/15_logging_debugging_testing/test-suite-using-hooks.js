describe("Test Suite", function(){
	before(function(){
		console.log("Setting up test suite");
	});

	beforeEach(function(){
		console.log("Setting up an individual test");
	});

	afterEach(function(){
		console.log("Tearing down an individual test");
	});

	after(function(){
		console.log("Tearing down the test suite");
		//done();
	});

	it("Test 1", function(){
		console.log("Running Test 1");
	});

	it("Test 2", function(){
		console.log("Running Test 2");
	});
});