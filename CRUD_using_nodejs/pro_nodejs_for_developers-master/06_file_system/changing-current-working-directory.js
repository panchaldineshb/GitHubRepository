console.log("The current working directory is now " + process.cwd());

try {
	process.chdir("/");
} catch (exception) {
	console.error("chdir error:  " + exception.message);
}

console.log("The current working directory is now " + process.cwd());