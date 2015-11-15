// byteLength
console.log("byteLength property: ")
var buf = ArrayBuffer(10);
var view = new Int16Array(buf, 0, 2);

console.log(buf.byteLength);
console.log(view.byteLength);

// length
console.log("length property: ")
var view = new Int32Array([5, 10]);

for (var i = 0, len = view.length; i < len; i++) {
	console.log(view[i]);
}

// byteOffset
console.log("byteOffset property: ")
var buf = new ArrayBuffer(10);
var view = new Int16Array(buf, 4, 2);
var len = view.byteOffset + view.byteLength;

view[0] = 100;
view[1] = 256;

for (var i = view.byteLength; i < len; i++) {
	console.log(buf[i]);
}