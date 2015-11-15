var path = require('path');
var fileName = "/foo/bar/baz.txt";

// Extracting the extension
var extension = path.extname(fileName);
console.log(extension);

// Extracting the filename
var file = path.basename(fileName);
console.log(file);

// Extracing filename without extension
var file = path.basename(fileName, extension);
console.log(file);

// Extracting the directory name 
var dirName = path.dirname(fileName);
console.log(dirName);