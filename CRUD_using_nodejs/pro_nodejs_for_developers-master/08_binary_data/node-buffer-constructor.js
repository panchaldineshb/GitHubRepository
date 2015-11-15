// first type of Buffer constructor
var buf = new Buffer(4);

buf[0] = 0;
buf[1] = 1;

console.log(buf);

// second type of Buffer constructor
var buf = new Buffer([1, 2, 3, 4]);

console.log(buf);

// third type of Buffer constructor
var buf = new Buffer("foo");

console.log(buf);
