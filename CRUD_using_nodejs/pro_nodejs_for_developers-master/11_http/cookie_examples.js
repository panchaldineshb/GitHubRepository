// Example of two set-cookie headers
// Set-Cookie: name=Colin
// Set-Cookie: foo=bar

response.setHeader("Set-Cookie", 
	["name=Colin; Expires=Sat, 10 Jan 2015 20:00:00 GMT;\
	Domain=foo.com; HttpOnly; Secure",
	"foo=bar; Max-Age=3600"]);