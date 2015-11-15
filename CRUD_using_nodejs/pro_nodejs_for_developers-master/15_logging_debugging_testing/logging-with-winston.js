var winston = require("winston");

winston.log("info", "Hello winston!");
winston.log("warn", "Something not so good happened");
winston.log("error", "Something really bad happened");

// Another syntax can be used
winston.info("Hello winston!");
winston.warn("Something not so good happened");
winston.error("Something really bad happened");

var fs = require("fs");
var path = "foo.txt";

fs.open(path, "r", function(error, fd){
    if (error) {
        winston.error("An error occurred while opening %s.", path, error);
    }  else {
        winston.info("Successfully opened %s.", path);
    }
});