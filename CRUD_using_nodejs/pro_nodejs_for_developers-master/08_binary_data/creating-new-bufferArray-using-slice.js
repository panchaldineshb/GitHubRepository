var foo = new ArrayBuffer(4);
var bar;

foo[0] = 0;
foo[1] = 1;
foo[2] = 2;
foo[3] = 3;

// Create new copy of foo and modify it
bar = foo.slice(0);
bar[0] = 0xc;

console.log(foo);
console.log(bar);