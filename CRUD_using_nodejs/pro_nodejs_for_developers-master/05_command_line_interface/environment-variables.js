
console.log("Original: " + process.env.PATH);
process.env.PATH = "/some/path:" + process.env.PATH;
console.log("Updated:    " + process.env.PATH);

// !! enforces conversion of any value to Boolean type

var devMode = !!process.env.DEVELOPMENT;

if (devMode) {
	console.log("Some useful debugging information");
}

// Normally nothing gets displayed 
// But if execute the scirpt this way:
//
// DEVELOPMENT=1 node environment-variable.js
//
// then we get our message
