var path = require('path');
var normalized = path.join("/foo/bar", ".././bar", "../..", "/baz");

console.log(normalized);