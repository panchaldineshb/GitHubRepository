var fs = require("fs");
var path = "foo.txt";

fs.open(path, "r", function(error, fd){
    if (error) {
        console.error("open error: " + error.message);
    }  else {
        console.log("Successfully opened " + path);
    }
});