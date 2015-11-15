var buf = new ArrayBuffer(8);
var view = new Uint32Array(buf);

view[0] = 100;
view[1] = 256;

console.log(view);