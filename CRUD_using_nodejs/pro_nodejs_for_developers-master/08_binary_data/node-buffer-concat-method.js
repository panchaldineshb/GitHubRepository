var buf1 = new Buffer([1, 2]);
var buf2 = new Buffer([3, 4]);

// without arguments concat method returns 0-length buffer
// with one arguments it returns reference to that Buffer
// with two arguments new Buffer is created 

var buf = Buffer.concat([buf1, buf2]);

console.log(buf);