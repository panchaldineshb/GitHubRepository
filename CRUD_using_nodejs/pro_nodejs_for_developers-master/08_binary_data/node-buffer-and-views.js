// ArrayBuffer can be constructed from view of Buffer

var buf = new Buffer(4);
var view;

buf.fill(0);
view = new Uint32Array(buf);
console.log(buf);
console.log(view);

// ArrayBuffers cannot be constrcuted directly from Buffers
// Buffer cannot be constructed directly from ArrayBuffer

// Buffer can be constructed from the viev - but with caution

var view = new Uint32Array([257]);
var buf = new Buffer(view);

console.log(buf);
