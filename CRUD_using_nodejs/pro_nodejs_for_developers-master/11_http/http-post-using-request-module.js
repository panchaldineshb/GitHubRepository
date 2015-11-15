var request = require('request');

request({
	uri: "http://localhost:8000",
	method: "POST",
	headers: {
		Host: "localhost:8000"
	},
	form: {
		foo: "bar",
		baz: [1, 2]
	}
}, function(error, response, body){
	console.log(body);
});