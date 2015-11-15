var buf = new Buffer(8);
var value;

buf.writeDoubleLE(3.14, 0);
value = buf.readDoubleLE(0);

console.log(value);