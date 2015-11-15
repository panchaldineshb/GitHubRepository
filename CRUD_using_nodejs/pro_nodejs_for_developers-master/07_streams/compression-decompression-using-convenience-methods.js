var zlib = require("zlib");
var data = "This is some data to compress";

zlib.deflate(data, function(error, compressed) {
	if (error) {
		console.error("Could not compress data!");
	}

	zlib.unzip(compressed, function(error, decompressed){
		if (error) {
			return console.error("Could not decompress data");
		}

		console.log(decompressed.toString());
	});
});