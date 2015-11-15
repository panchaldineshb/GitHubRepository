var fs = require('fs');
var path = process.cwd();

fs.readdir(path, function(error, files) {
    files.forEach(function(file){
        console.log(file);
    });
});