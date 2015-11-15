var buf = new Buffer(9);
var data = "foo";

buf.write(data);
buf.write(data, 3);
buf.write(data, 6, data.length);

console.log(buf.toString());