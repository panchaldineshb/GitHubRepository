// Windows uses a signel backslash as its path separator. However, backslashed must
// be escapaed inside ot JavaScript string literals. That is why path.sep returns
// \\ in Windows

var path = require('path');
var directories = ["foo", "bar", "baz"];
var directory = directories.join(path.sep);

console.log(directory);

// Windows uses semicolon (;) to separate directories in the PATH environment variable
// All other systems use a colon (:). path.delimiter is used to abstract this away

process.env.PATH.split(path.delimiter).forEach(function(dir) {
	console.log(dir);
});