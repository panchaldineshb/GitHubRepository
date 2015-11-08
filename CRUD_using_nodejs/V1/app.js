/**
 * Module dependencies
 */
var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var u = require('./utils');


var app = module.exports = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);

app.get('/', function(req, res) {
    res.type('text/plain');
    res.send('Meadowlark Travel');
});

/**
 * Routes
 */
 
// About routes
app.get('/about', function(req, res) {
    res.type('text/plain');
    res.send('About Meadowlark Travel');
});
app.get('/about/contact',function(req,res) {
    res.type('text/plain');
    res.send('About Contact of Meadowlark Travel');
})
app.get('/about/directions',function(req,res) {
    res.type('text/plain');
    res.send('About Direcion of Meadowlark Travel');
})

// About routes


// Api
app.get('/api/:version', function(req, res) {
	res.send(req.params.version);
});
app.get('/api/users', function(req, res) {
	
  var user_id = req.param('id');
  var token = req.param('token');
  var geo = req.param('geo');  

  res.send(user_id + ' ' + token + ' ' + geo);
});
app.post('/api/users', function(req, res) {
	var user_id = req.body.id;
	var token = req.body.token;
	var geo = req.body.geo;

	res.send(user_id + ' ' + token + ' ' + geo);
});


app.get('/api/users/:name', function(req, res) {
	// the user was found and is available in req.user
	res.send('What is up ' + req.params.name + '!');
});


// Data
app.get('/data/nursery-rhyme', function(req, res) {
    res.json({
        animal: 'squirrel',
        bodyPart: 'tail',
        adjective: 'bushy',
        noun: 'heck',
    });
});


// custom 404 page
app.use(function(req, res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 - Not Found');
});


// custom 500 page
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 - Server Error');
});

