var path = require('path');
var dirName = "/foo/bar/.././bar/../../baz";
var normalized = path.normalize(dirName);

console.log(normalized);