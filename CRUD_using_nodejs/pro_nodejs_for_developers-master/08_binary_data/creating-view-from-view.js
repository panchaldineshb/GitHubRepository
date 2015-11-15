var buf = new ArrayBuffer(4);
var view1 = new Int8Array(buf);
var view2 = new Uint32Array(view1);

console.log(buf.byteLength);    // 4
console.log(view1.byteLength);  // 4
console.log(view2.byteLength);  //16