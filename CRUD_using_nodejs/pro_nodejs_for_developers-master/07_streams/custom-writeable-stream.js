var Stream = require("stream");
var stream = new Stream();
var bytes = 0;

stream.writeable = true;

stream.write = function(buffer) {
	bytes += buffer.length;
};

stream.end = function(buffer) {
	if (buffer) {
		stream.write(buffer);
	}

	stream.writeable = false;
	stream.emit("finish");
	console.log(bytes + " bytes written");
};