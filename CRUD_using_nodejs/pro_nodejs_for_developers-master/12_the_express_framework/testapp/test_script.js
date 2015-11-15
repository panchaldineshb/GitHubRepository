var async = require("async");
var request = require("request");
var base = "http://localhost:8000";
var file = "foo";

function create(callback) {
    request({
        uri: base + "/" + file,
        method: "POST",
        form: {
            data: "This is a test file!"
        }
    }, function(error, response, body){
        console.log("create: " + response.statusCode);
        callback(error);
    });
}

function read(callback) {
    request({
        uri: base + "/" + file,
        json: true // get the repsonse as a JSON object
    }, function(error, response, body){
        console.log("read: " + response.statusCode);
        
        if (response.statusCode === 200) {
            console.log(response.body.data);
        }
        
        callback(error);
    });

}

function update(callback) {
    request({
        uri: base + "/" + file,
        method: "PUT",
        form: {
            data: "This file has been updated!"
        }
    }, function(error, response, body){
        console.log("udpdate: " + response.statusCode);
        callback(error);
    });
}

function del(callback){
    request({
        uri: base + "/" + file,
        method: "DELETE"
    }, function(error, response, body){
        console.log("delete: " + response.statusCode);
        callback(error);
    })
}

async.waterfall([
   create,
   read,
   update,
   read,
   del,
   read
]);