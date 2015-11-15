// process.stdout.write(data, [encoding], [callback])

var util = require('util');
var name = 'Colin';
var age = 100;

var format1 = util.format("Hi, my name is %s", name);
var format2 = util.format("Hi, my name is %d", name);
var format3 = util.format("Hi, my name is %j", name);
var format4 = util.format("Hi, my name is %j");
var format5 = util.format("Hi, my name is %j", name, name);
var format6 = util.format("I'm %s, and I'm %d years old", name, age);
var format7 = util.format(name, age);

console.log(format1);
console.log(format2);
console.log(format3);
console.log(format4);
console.log(format5);
console.log(format6);
console.log(format7);

util.log("This is timestamped information.")

// Other methods info() and dir()

var obj = {
	foo: {
		bar: {
			baz: {
				baff: false,
				beff: "string value",
				biff: null
			},
			boff: []
		}
	}
}

// We can specify how deep should do inspect see (default is 2)
console.log(util.inspect(obj));

// Setting depth to null inspects whole object
console.log(util.inspect(obj, {depth: null}));

var obj2 = {
	foo: {
		bar: {
			baz: {
				baff: false,
				beff: "string value",
				biff: null
			},
			boff: []
		}
	},
	inspect: function() {
		return "{Where'd everything go?}";
	}
};

// We defined custom inspect and since customInsepct property is by default 
// set to true, our new inspect works immediately
console.log(util.inspect(obj2));