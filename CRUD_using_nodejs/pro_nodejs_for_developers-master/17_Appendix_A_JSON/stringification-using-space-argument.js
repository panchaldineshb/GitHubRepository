var obj = {
	foo: 0,
	bar: [null, true, false],
	baz: {
		bizz: "boff"
	}
};

var json1 = JSON.stringify(obj, null, "  ");
var json2 = JSON.stringify(obj, null, 2);
var json3 = JSON.stringify(obj, null, "");

console.log(json1);
console.log(json2);
console.log(json3);