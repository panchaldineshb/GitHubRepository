
/**
* Module dependencies.
*/
var express = require('express'),
    form = require('connect-form'),
    jade = require('jade'),
    mongoose = require('mongoose'),
    util =  require('util'),
    mailer = require('mailer'),
    markdown = require('markdown').markdown,
    models = require('./models'),
    sys = require('sys'),
    path = require('path'),
    fs = require('fs'),
    check = require('validator').check,
    sanitize = require('validator').sanitize,      
    db,
    User,
    Leads,
    Addresses,
    Tags,
    Field_Groups,
    LoginToken,
    Settings = { development: {}, test: {}, production: {} },
    emails;  
    
    
 
var app = module.exports = express.createServer(form({ keepExtensions: true }));

function renderJadeFile(template, options) {
  var fn = jade.compile(template, options);
  return fn(options.locals);
}

// Configuration
var pub = __dirname + '/public';

app.configure(function(){
  app.set('views', __dirname + '/views');
  //app.register('.html', require('jade'));
  //app.set("view options", {layout: false});
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.bodyParser());
  //app.use(connectTimeout({ time: 10000 }));
  app.use(express.logger());
  app.use(express.methodOverride());
  app.use(express.cookieParser());
  app.use(express.session({ secret: 'htuayreve'}));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
  app.use(require('stylus').middleware({ src: __dirname + '/public' }));
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
  app.set('mailOptions', {
    domain : "darhamid-desktop",
    host: 'smtp.gmail.com',
    port: '25',
    from: 'hamid.dar@pragtech.co.in',
    authentication : "login",        // auth login is supported; anything else is no auth
    username : "",        // username
    password : ""         // password
  });
});
   
app.helpers(require('./helpers.js').helpers);
app.dynamicHelpers(require('./helpers.js').dynamicHelpers);


app.configure('development', function() {
  app.set('db-uri', 'mongodb://localhost/fat_free_crm-new-10th-april-1');
  app.use(express.errorHandler({ dumpExceptions: true }));
});


app.configure('production', function() {
  app.set('db-uri', 'mongodb://localhost/fat_free_crm-new-april-10');
});


models.defineModels(mongoose, function() {
  app.User = User = mongoose.model('User');
  app.Leads = Leads = mongoose.model('Leads');
  app.Addresses = Addresses = mongoose.model('Addresses');
  app.Tags = Tags = mongoose.model('Tags');
  app.Field_Groups = Field_Groups = mongoose.model('Field_Groups');
  app.LoginToken = LoginToken = mongoose.model('LoginToken');
  db = mongoose.connect(app.set('db-uri'));
   
})

 


// Error handling
function NotFound(msg) {
  this.name = 'NotFound';
  Error.call(this, msg);
  Error.captureStackTrace(this, arguments.callee);
}

sys.inherits(NotFound, Error);

app.get('/404', function(req, res) {
  throw new NotFound;
});

app.get('/500', function(req, res) {
  throw new Error('An expected error');
});

app.get('/bad', function(req, res) {
  unknownMethod();
});

app.error(function(err, req, res, next) {
  if (err instanceof NotFound) {
    res.render('404.jade', { status: 404 });
  } else {
    next(err);
  }
});

if (app.settings.env == 'production') {
  app.error(function(err, req, res) {
    res.render('500.jade', {
      status: 500,
      locals: {
        error: err
      } 
    });
  });
}

 
//New Code 


emails = {
  send: function(template, mailOptions, templateOptions) {
    mailOptions.to = mailOptions.to;
    renderJadeFile(path.join(__dirname, 'views', 'mailer', template), templateOptions, function(err, text) {
      // Add the rendered Jade template to the mailOptions
      mailOptions.body = text;
      // Merge the app's mail options
      var keys = Object.keys(app.set('mailOptions')),
          k;
      for (var i = 0, len = keys.length; i < len; i++) {
        k = keys[i];
        if (!mailOptions.hasOwnProperty(k))
          mailOptions[k] = app.set('mailOptions')[k]
      }

      console.log('[SENDING MAIL]', sys.inspect(mailOptions));

      // Only send mails in production
      if (app.settings.env == 'development') {
        mailer.send(mailOptions,
          function(err, result) {
            console.log("++++++++++++vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv+++++++",result);
            if (err) {
              console.log(err);
            }
          }
        );
      }
    });
  },

  sendWelcome: function(user) {
    this.send('welcome.jade', { to: user.email, subject: 'Welcome to Video Upload' }, { locals: { user: user } });
  }
};


function authenticateFromLoginToken(req, res, next) {
  var cookie = JSON.parse(req.cookies.logintoken);

  LoginToken.findOne({ email: cookie.email,
                       series: cookie.series,
                       username:cookie.username,
                       token: cookie.token }, (function(err, token) {
    if (!token) {
      res.redirect('/sessions/new');
      return;
    }

    User.findOne({ username: token.username }, function(err, user) {
      if (user) {
        req.session.user_id = user.id;
        req.currentUser = user;

        token.token = token.randomToken();
        token.save(function() {
          res.cookie('logintoken', token.cookieValue, { expires: new Date(Date.now() + 2 * 604800000), path: '/' });
          next();
        });
      } else {
        res.redirect('/sessions/new');
      }
    });
  }));
}

function loadUser(req, res, next) {
  
  if (req.session.user_id) {
    User.findById(req.session.user_id, function(err, user) {
      if (user) {
        req.currentUser = user;
        next();
      } else {
        res.redirect('/sessions/new');
      }
    });
  } else if (req.cookies.logintoken) {
    authenticateFromLoginToken(req, res, next);
  } else {
    res.redirect('/sessions/new');
  }
}

 

app.get('/', loadUser, function(req, res) {
  res.redirect('/index')
});

app.get('/leads/:id/reject', loadUser, function(req, res) {
   Leads.findById(req.params.id,function(err, lead) {
     console.log("-----------------------------leads",lead);
     lead.status = 'Rejected';
     lead.save(function(err) {
          if(err) {
            console.log("unable to save lead");
           }
          else{
             res.redirect('/leads/all');
          }
     });
     
   });
});
 


app.put('/leads/:id/edit', loadUser, function(req, res, next) {
    console.log("-----------------req.body",req.body);
    Leads.findById(req.params.id,function(err, lead) {
       if(lead) {
              lead.first_name = req.body.lead.first_name;
              lead.last_name = req.body.lead.last_name;
	      lead.email = req.body.lead.email;
	      lead.phone = req.body.lead.phone;
	      lead.tags = req.body.lead.tags;
	      lead.user_id = req.currentUser.id;
	      lead.reffered_by = req.currentUser.id;
	      lead.assigned_to = req.currentUser.id;
	      lead.compaign = req.currentUser.id;
	      lead.status = req.body.lead.status;
	      lead.lead_source = req.body.lead.lead_source;
	      lead.rating = req.body.lead.rating;
	      lead.title = req.body.lead.title;
	      lead.company = req.body.lead.company;
	      lead.alt_email = req.body.lead.alt_email;
	      lead.mobile = req.body.lead.mobile;
	      lead.blog = req.body.lead.blog;
	      lead.twitter = req.body.lead.twitter;
	      lead.facebook = req.body.facebook;
	      lead.linkedin = req.body.lead.linkedin;
	      lead.skype = req.body.lead.skype;
	      lead.access = req.body.lead.access;
	      lead.do_not_call = req.body.lead.do_not_call
	      lead.created_at = new Date();
	      lead.updated_at = new Date();
 
              Addresses.find({addressable_id:lead.id},function(err,address) {
                      console.log("----------77777777777777777777777777777777777------------",address[0].created_at);
		      address[0].created_at = new Date();
		      address[0].deleted_at = new Date();
		      address[0].full_address = req.body.lead.business_address_attributes.street1+" "+
		                     req.body.lead.business_address_attributes.street2+" "+
		                     req.body.lead.business_address_attributes.city+" "+
		                     req.body.lead.business_address_attributes.state+" "+
		                     req.body.lead.business_address_attributes.zipcode+" "+
		                     req.body.lead.business_address_attributes.country;
		      address.addressable_type ="Lead";
              
              lead.save(function(err) {
                  if(err) {
                    console.log("unable to save lead");
                   }
                  else{
                     address[0].addressable_id = lead.id;
                     address[0].save();
                     res.redirect('/leads/all');
                  }
             });
          });
        }
    });
});


app.get('/leads/:id/edit',loadUser, function(req, res){
   //console.log("============================req",req);
   Leads.findById(req.params.id,function(err, lead) {
     console.log("leeeeeeeeeeeeeeeeeeeeeeeeeeeeeeads",lead);
     Addresses.find({addressable_id:lead.id},function(err,address) {
       console.log("------------------------------address-----------",address);
       res.render('Leads/edit.jade', {
	 locals: {
            lead: lead,
            business_address_attributes : address,
	    currentUser: req.currentUser
         }
       });
     });
    
  });
});


app.get('/leads/all',loadUser, function(req, res){
   console.log("============================req",req);
   Leads.find({user_id:req.currentUser.id},function(err, leads) {
      
      console.log("-------------------------------all lead info",leads);
      res.render("Leads/index.jade",{
	 locals: {
	   currentUser: req.currentUser,leads:leads
         }
      });
   });

});

app.post('/leads',loadUser, function(req, res){
      console.log("-----------------req.body",req.body);
       
      var lead = new Leads();
      lead.first_name = req.body.lead.first_name;
      lead.last_name = req.body.lead.last_name;
      lead.email = req.body.lead.email;
      lead.phone = req.body.lead.phone;
      lead.tags = req.body.lead.tags;
      lead.user_id = req.currentUser.id;
      lead.reffered_by = req.currentUser.id;
      lead.assigned_to = req.currentUser.id;
      lead.compaign = req.currentUser.id;
      lead.status = req.body.lead.status;
      lead.lead_source = req.body.lead.lead_source;
      lead.rating = req.body.lead.rating;
      lead.title = req.body.lead.title;
      lead.company = req.body.lead.company;
      lead.alt_email = req.body.lead.alt_email;
      lead.mobile = req.body.lead.mobile;
      lead.blog = req.body.lead.blog;
      lead.twitter = req.body.lead.twitter;
      lead.facebook = req.body.facebook;
      lead.linkedin = req.body.lead.linkedin;
      lead.skype = req.body.lead.skype;
      lead.access = req.body.lead.access;
      lead.do_not_call = req.body.lead.do_not_call
      lead.created_at = new Date();
      lead.updated_at = new Date();
      
      
      
      var address = new Addresses(req.body.lead.business_address_attributes);
      console.log("addddddddddddddddddddddressses",address);
      //lead.business_address_attributes.$push(address);
      address.created_at = new Date();
      address.deleted_at = new Date();
      address.full_address = req.body.lead.business_address_attributes.street1+" "+
                             req.body.lead.business_address_attributes.street2+" "+
                             req.body.lead.business_address_attributes.city+" "+
                             req.body.lead.business_address_attributes.state+" "+
                             req.body.lead.business_address_attributes.zipcode+" "+
                             req.body.lead.business_address_attributes.country;
      address.addressable_type ="Lead";
      
      console.log("lead--------------------firstname",lead.first_name);
      lead.save(function(err) {
         if(err) {
           console.log("unable to save lead");
         }
         else{
            address.addressable_id = lead.id;
            address.save();
            res.redirect('/leads/all');
          }
      });
});

app.get('/leads/new',loadUser, function(req, res){
     res.render('Leads/leads.jade', {
	 locals: {
            leads: new Leads(),
	    currentUser: req.currentUser
         }
     });
   
});



app.get('/userinfo',loadUser, function(req, res){
  var user = User.findById(req.currentUser.id,function(err, user) {
     console.log("user=====================================",user.username);
     res.render('Home/index.jade', {
	 locals: {
	   user:user,currentUser: req.currentUser
         }
     });
  });
});


//Save New User
app.post('/users.:format?', function(req, res) {
  var useremail;
  var pas = req.body.user.password;
  console.log("usernameeeeeeeeeeeeeeeeeeeee",pas);
  var pas1 = req.body.user.password_confirmation;
  var user = new User(req.body.user);
  console.log("uuuuuuuuuuuuuuuuuuuseeeeeeeeeeeeeeeer",user);
  //user.email = req.body.user.email;
  //user.username = req.body.user.username;
  //user.hashed_password = req.body.user.password; 
  user.created_at = new Date();
  user.updated_at = new Date(); 
     
  if(pas == pas1) { 
    user.save(function(err) {
      //req.flash('info', 'Your account has been created');
      emails.sendWelcome(user);

      switch (req.params.format) {
        case 'json':
          res.send(user.toObject());
      break;

      default:
         req.session.user_id = user.id;
         res.redirect('/userinfo');
      }
        
    });
  }
   
});

//Create new user
app.get('/users/new', function(req, res) {
  var ua = req.headers['user-agent'].toLowerCase();
     res.render('User/register.jade', {
        locals: { user: new User() }
     });
       
});


// Sessions
app.get('/sessions/new', function(req, res) {
      //console.log("r=====================================",req);
      res.render('User/login.jade', {
        locals: { user: new User() ,req:req}
      });
});


app.post('/sessions', function(req, res) {
  //console.log("reqassssssssssssssssssssssssssss",req);
  User.findOne({ username: req.body.user.username }, function(err, user) {
     //console.log("usssssssssssssssssssssssssssssssser",user);
     var error = 1;
     if (user && user.authenticate(req.body.user.password) ) {
        console.log("useeeeeeeeeeeeeeeeeeeeeeeeeeeer",user);
       req.session.user_id = user.id;
       console.log("-----------------------------yyyyyyyyyyyyyyyyyyyyyyyyyyyyyy",req.connection.remoteAddress);
       console.log("---------------------------user session information---------------"+req.session.user_id);
        
      // Remember me
      if (req.body.user.remember_me) {
        var loginToken = new LoginToken({ username: user.username });
        loginToken.save(function() {
          res.cookie('logintoken', loginToken.cookieValue, { expires: new Date(Date.now() + 2 * 604800000), path: '/' });
          
          res.redirect('/userinfo');
        });
      }  
      else {
         res.redirect('/userinfo');
      }
      
    } 
          
      else {
            console.log('invalid username password');
            req.flash('error', 'Incorrect credentials');
            res.render('User/login.jade',{locals: {user:new User(),req:req} });
       } 
    
  }); 
});

app.get('/sessions', loadUser, function(req, res) {
  if (req.session) {
    LoginToken.remove({ email: req.currentUser.email, username:req.currentUser.username }, function() {});
    res.clearCookie('logintoken');
    req.session.destroy(function() {});
  }
  res.redirect('/sessions/new');
});



if (!module.parent) {
  app.listen(5000);
  console.log("Express server listening on port %d, log on to http://127.0.0.1:5000", app.address().port);
}
