var EventEmitter = require("events").EventEmitter;
var util = require('util');
var fs = require('fs');

function FileReader(fileName) {
	var _self = this;

	EventEmitter.call(_self);

	_self.on("stats", function() {
		fs.stat(fileName, function(error, stats) {
			if (!error && stats.isFile()) {
				_self.emit("read");
			}
		});
	});

	_self.on("read", function() {
		fs.readFile(fileName, "utf-8", function(error, data) {
			if (!error && data) {
				console.log(data);
			}
		});
	});

	fs.exists(fileName, function(exists) {
		if (exists) {
			_self.emit("stats");
		}
	});
};

util.inherits(FileReader, EventEmitter);

var reader = new FileReader("foo.txt");