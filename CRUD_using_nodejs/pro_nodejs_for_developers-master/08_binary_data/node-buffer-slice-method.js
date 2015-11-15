
var buf1 = new Buffer(4);
console.log(buf1);

// Slicing returns new buffer but it shared the same memory as the original
// sa writing to buf2 affects buf1
var buf2 = buf1.slice(0,2);
buf2.fill(2);

console.log(buf1);