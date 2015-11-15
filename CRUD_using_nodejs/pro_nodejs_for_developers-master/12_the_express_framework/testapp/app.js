var express = require('express'),
    routes = require('./routes'),
    path = require('path'),
    validator = require("express-validator");

var app = module.exports = express.createServer();

// define the storage area
app.use(function(req, res, next){
   req.store = __dirname + "/store";
   next();
});

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(validator());
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Routes

app.get('/', routes.index);

app.get("/products/:productId", function(req, res, next) {
    var errors;
    
    // Assert takes parameter name and error message as arguments
    // Validation methods:
    // - notEmpty()
    // - isAlpha()
    // - len()
    // There are also:
    // - isInt()
    // - isEmail()
    // - isNull()
    // - is()
    // - contains()
    req.assert("productId", "Missing product ID").notEmpty();
    req.assert("productId", "Invalid product ID").isAlpha().len(2, 10);
    errors = req.validationErrors();
    
    // There is also sanitize() method, which is used to clean up input
    // req.sanitize("parameter").toBoolean() - changes to boolean
    // req.sanitize("parameter").toInt() - changes to integer
    // req.sanitize("parameter").trim() - trims spaces before and after parameter
    // req.sanitize("parameter").entityDecode() - replaces character entities (ie &lt and &gt) with corresponding characters (< and >)
    
    if (errors) {
        return res.send(errors);
    }
    
    res.send("Requested " + req.params.productId);
});


app.listen(8000);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
