var Stream = require('stream');
var stream = new Stream();

stream.readable = true;
stream.emit("data", new Buffer("foo"));