var fs = require('fs');
var path = __dirname + "/foo";

fs.rmdir(path, function(error) {
    if (error) {
        console.error("rmdir error: " + error.message);
    }
});

