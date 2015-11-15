// In this viersion of express routes.js was not created in this folder
// so for purpose of example it has been created here no matter it does
// not fit the architectural structure of this express revision

var create = require("./create");
var read = require("./read");
var update = require("./update");
var del = require("./delete");

module.exports.mount = function(app){
    app.post("/:fileName", create);
    app.get("/:fileName", read);
    app.put("/:fileName", update);
    app.delete("/:fileName", del);
};