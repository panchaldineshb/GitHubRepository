var dns = require("dns");
var domain = "google.com";

dns.resolve(domain, "AAAA", function(error, addresses){
	if (error) {
		console.error("DNS lookup failed with code " + error.code);
	} else {
		console.log(domain + " -> " + addresses);
	}
});