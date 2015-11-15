var buf = new ArrayBuffer(4);
var view1 = new Uint32Array(buf);
var view2 = new Uint8Array(buf);

// write to view1 and print the value
view1[0] = 100;
console.log("Unit32 = " + view1[0]);

// write to view2 and print view1's value
view2[1] = 1;
console.log("Uint32 = " + view1[0]);