var Stream = require("stream");
var stream = new Stream();
var bytes = 0;

stream.writable = true;

// this method just stores the current length of stream
stream.write = function(buffer) {
	bytes += buffer.length;
};

// in order to have buffer passed to this function
// the stream must have writable property set to true
stream.end = function(buffer) {
	if (buffer) {
		stream.write(buffer);
	}

	stream.writable = false;
	stream.emit("finish");
	console.log(bytes + " bytes written");
};

stream.pipe(stream);
stream.emit("data", new Buffer("foo"));
stream.emit("end");