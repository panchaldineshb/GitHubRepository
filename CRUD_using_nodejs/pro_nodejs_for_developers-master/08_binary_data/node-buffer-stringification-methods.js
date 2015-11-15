// first stringification method

var buf = new Buffer("foo");

console.log(buf.toString());

// second stringification method

var buf = new Buffer("foo");
console.log(buf.toJSON());
console.log(JSON.stringify(buf));

