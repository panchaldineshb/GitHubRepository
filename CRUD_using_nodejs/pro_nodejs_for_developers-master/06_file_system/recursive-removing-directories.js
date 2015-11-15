var fs = require('fs');
var path = __dirname + "/foo";

function rmdir(path) {
    if (fs.existsSync(path)) {
        fs.readdirSync(path).forEach(function(file) {
           var f = path + "/" + file;
           var stats = fs.statSync(f);
           if (stats.isDirectory()) {
               rmdir(f);
           } else {
               fs.unlinkSync(f);
           }
        });
        
        // remove main directory
        fs.rmdirSync(path);
    }
}

rmdir(path);