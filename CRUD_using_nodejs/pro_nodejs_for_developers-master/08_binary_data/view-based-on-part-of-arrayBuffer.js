var buf = new ArrayBuffer(5);
var view = new Int32Array(buf, 0, 1);

view[0] = 256;
buf[4] = 5;
console.log(view[0]);
console.log(buf);