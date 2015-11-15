var path = require('path');
var from = "/foo/bar";
var to = "/baz/biff";
var relative = path.relative(from, to);

console.log(relative);