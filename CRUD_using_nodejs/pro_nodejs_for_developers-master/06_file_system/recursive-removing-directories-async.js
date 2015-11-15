var async = require('async');
var fs = require('fs');
var path = __dirname + "/foo";

function rmdir(path, callback) {
    // first check if the path exists
    fs.exists(path, function(exists) {
       if (!exists) {
           return callback(new Error(path + "does not exist"));
       } 
       
       fs.readdir(path, function(error, files){
           if (error) {
               return callback(error);
           }
           
           // loop over the files returned by readdir()
           async.each(files, function(file, cb){
               var f = path + "/" + file;
               
               fs.stat(f, function(error, stats){
                   if (error) {
                       return cb(error);
                   }
                   if (stats.isDirectory()) {
                       // recursively call rmdir() on the directory
                       rmdir(f, cb);
                   } else {
                       // delte the file
                       fs.unlink(f, cb);
                   }
               });
            }, function(error) {
               if (error) {
                   return callback(error);
               }
               
               // the directory is now empty, so delte it
               fs.rmdir(path, callback);
            });
        });
    });
   
}
    
// now call the recursie rmdir() function
rmdir(path, function(error){
    if (error) {
        console.error("rmdir error: " + error.message);
    } else {
        console.log("Successfully removed " + path);
    }
});
    