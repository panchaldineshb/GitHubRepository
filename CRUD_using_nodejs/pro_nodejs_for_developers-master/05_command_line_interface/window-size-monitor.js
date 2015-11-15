function size() {
	var columns = process.stdout.columns;
	var rows = process.stdout.rows;

	console.log("Size: " + columns + "x" + rows);
}

if (!process.stdout.isTTY) {
	console.error("Not using a terminal window!");
	process.exit(-1);
}

size();
process.stdout.on("resize", size);
process.stdin.resume();