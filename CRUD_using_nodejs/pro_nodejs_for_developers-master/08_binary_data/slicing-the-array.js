var foo = new ArrayBuffer(4);

foo[0] = 0;
foo[1] = 1;
foo[2] = 2;
foo[3] = 3;

// returns [2,3]
console.log(foo.slice(2,4));
console.log(foo.slice(2, foo.byteLength));
console.log(foo.slice(2));
console.log(foo.slice(-2));
