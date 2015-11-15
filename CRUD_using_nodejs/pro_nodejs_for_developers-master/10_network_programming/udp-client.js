var dgram = require('dgram');
var client = dgram.createSocket("udp4");
var message = new Buffer("Hello UDP");

client.send(message, 0, message.length, 8000, "127.0.0.1", function(error, bytes){
	if (error) {
		console.error("An error occurred while sending");
	} else {
		console.log("Successfully sent " + bytes + " bytes");
	}

	client.close();
});
