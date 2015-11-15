process.stdin.once("data", function(data) {
	var response = data.toString();

	console.log("You said your name is " + response);
	process.stdin.pause();
});

console.log("What is your name? ");

// By deafult stdin stream is paused. In order to read from it we must
// resume it
process.stdin.resume();

// We can also pause it again using process.stdin.pause()