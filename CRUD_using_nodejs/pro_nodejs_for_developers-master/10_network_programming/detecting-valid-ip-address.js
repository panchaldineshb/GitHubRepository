var net = require('net');
var input1 = "127.0.0.1";
var input2 = "fe80::1610:9fff:fee4:d63d";
var input3 = "foo";

function classify(input) {
	console.log("isIP('" + input + "') = " + net.isIP(input));
	console.log("isIPv4('" + input + "') = " + net.isIPv4(input));
	console.log("isIPv6('" + input + "') = " + net.isIPv6(input));
	console.log();
}

classify(input1);
classify(input2);
classify(input3);