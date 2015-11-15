var buf1 = new Buffer([1, 2, 3, 4]);
var buf2 = new Buffer(4);

buf1.copy(buf2, 0, 0, buf1.length);

console.log(buf1);
console.log(buf2);