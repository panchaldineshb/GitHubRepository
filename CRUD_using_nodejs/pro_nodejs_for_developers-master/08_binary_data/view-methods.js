// get() 
console.log("get() method: ")
var view = new Uint8ClampedArray([15]);

console.log(view.get(0));
// could also use view[0]

// set()
var ivew = new Float64Array(4);
view.set(3, 3.14);
// could also use view[3] = 3.14

// set() multiple values are set with offset
var view = new Int32Array(4);

view.set([1, 2, 3, 4], 0);

// comlicated copy example - values are not overwritten
var buf = new ArrayBuffer(4);
var view1 = new Int8Array(buf);
var view2 = new Int8Array(buf, 0, 2);

view1[0] = 0;
view1[1] = 1;
view1[2] = 2;
view1[3] = 3;
view1.set(view2, 1);
console.log(view1.buffer);

// subarray()
var view1 = new Uint8ClampedArray([1, 2, 3, 4, 5]);
var view2 = view1.subarray(3, view1.length);
var view3 = view1.subarray(3);
var view4 = view1.subarray(-2);