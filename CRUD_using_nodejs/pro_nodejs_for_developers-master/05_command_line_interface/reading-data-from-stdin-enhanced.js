process.stdin.once("data", function(data) {

//  When encoding is set - this line is not needed any more
//	var response = data.toString();

	console.log("You said your name is " + response);
	process.stdin.pause();
});

console.log("What is your name? ");

// By deafult stdin stream is paused. In order to read from it we must
// resume it

// We set the encoding for the incoming stream
process.stdin.setEncoding("utf-8");
process.stdin.resume();

// We can also pause it again using process.stdin.pause()