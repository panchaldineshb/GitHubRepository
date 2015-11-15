// Empty Float32Array view. Behind the scenes the constructor
// also creates an 8-byte ArrayBuffer to hold the floats
// All the bytes in the ArrayBuffer are initialized to 0.
var view = new Float32Array(2);