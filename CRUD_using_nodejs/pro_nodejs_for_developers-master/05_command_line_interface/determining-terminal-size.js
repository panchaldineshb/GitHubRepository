var columns = process.stdout.columns;
var rows = process.stdout.rows;

console.log("Size: " + columns + "x" + rows);

// Determining the terminal size is not possible suing stdin, as terminal dimensions
// are associate only with writable TTY streams.