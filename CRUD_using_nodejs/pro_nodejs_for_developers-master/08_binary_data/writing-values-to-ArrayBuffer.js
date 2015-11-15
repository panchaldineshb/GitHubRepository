var foo = new ArrayBuffer(4);

foo[0] = 0;
foo[1] = 1;
foo[2] = 2;
foo[3] = 3;
// this assignment will fail silently
foo[4] = 4;
console.log(foo);

// print the Array Buffer

for (var i = 0, len = foo.byteLength; i < len; i++) {
	console.log(foo[i]);
}