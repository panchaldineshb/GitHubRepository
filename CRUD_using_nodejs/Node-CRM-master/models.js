var crypto = require('crypto'),
    User,
    Leads,
    Addresses,
    Tags,
    Field_Groups,
    LoginToken;   

function extractKeywords(text) {
  if (!text) return [];

  return text.
    split(/\s+/).
    filter(function(v) { return v.length > 2; }).
    filter(function(v, i, a) { return a.lastIndexOf(v) === i; });
}


function convertBasicMarkup(input, allowHtml) {
  var strongRe = /[*]{2}([^*]+)[*]{2}/gm;
  var emRe = /[*]{1}([^*]+)[*]{1}/gm;
  var linkRe = /\[([^\]]*)\]\(([^\)]*?)\)/gm;
  var nlRe = /\r\n/gm;
  var crRe = /\r/gm;
  
  // special re's to revert linebreaks from <br />
  var codeRe = /(<code\b[^>]*>(.*?)<\/code>)/gm;
  
  // cleanup newlines
  input = input.replace(nlRe, "\n");
  input = input.replace(crRe, "\n");
  
  // strip existing html before inserting breaks/markup
  if (!allowHtml) {
    // strip html
    input = input
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }
  
  // convert newlines to breaks
  input = input.replace(/\n/gm, '<br />');
  
  // replace basic markup
  input = input.replace(strongRe, function(whole, m1, m2, m3) {
    return '<strong>' + m1 + '</strong>';
  });
  
  input = input.replace(emRe, function(whole, m1, m2, m3) {
    return '<em>' + m1 + '</em>';
  });
  
  input = input.replace(linkRe, function(whole, m1, m2) {
    // fix up protocol
    if (!m2.match(/(http(s?)|ftp(s?)):\/\//gm))
      // prepend http as default
      m2 = 'http://' + m2;
    return '<a href=\"' + m2 + '\" target=\"_blank\">' + m1 + '</a>';
  });
  
  // revert code blocks
  input = input.replace(codeRe, function(whole, m1) {
    return m1.replace(/<br \/>/gm, '\n');
  });
    
  return input;
}




function defineModels(mongoose, fn) {
  var Schema = mongoose.Schema,
      ObjectId = Schema.ObjectId;


 


/**
    * Model: User
    */
function validatePresenceOf(value) {
  return value && value.length;
}
var User = new Schema({
     
    'first_name': { type: String, validate: /[a-z]/ },
    'last_name':{ type: String, validate: /[a-z]/ },
    'title':{ type: String }, 
    'username':{type: String, index:true },
    'company':{ type: String }, 
    'phone':{ type: Number },
    'mobile':{ type:Number },
    'email': { type: String, validate: [validatePresenceOf, 'an email is required'], index: { unique: true }, required:true },
    'alt_email': {type:String},
    'hashed_password': { type: String},
    'salt': String,
    'created_at':{ type : Date },
    'updated_at': { type : Date },
     
  });

  User.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });

  User.virtual('password')
    .set(function(password) {
      this._password = password;
      this.salt = this.makeSalt();
      this.hashed_password = this.encryptPassword(password);
    })
    .get(function() { return this._password; });

  User.method('authenticate', function(plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  });
  
  User.method('makeSalt', function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  });

  User.method('encryptPassword', function(password) {
    return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
  });

  User.pre('save', function(next) {
    if (!validatePresenceOf(this.password)) {
      next(new Error('Invalid password'));
    } else {
      next();
    }
    
  });


/**
    * Model: Leads
    *
    * Used for Maintaining Lead Information.
    */
var Leads = new Schema({
    user_id:{ type: ObjectId },
    tags : { type:String },
    compaign:{ type: ObjectId },
    assigned_to:{ type: ObjectId },
    first_name:{ type: String },
    last_name:{ type: String },
    access:{ type:String},
    title:{ type:String},
    company:{ type:String},
    lead_source:{ type:String},
    status:{ type:String},
    reffered_by:{ type: String},
    email:{ type:String},
    alt_email:{ type:String},
    phone:{ type:Number},
    mobile:{ type:Number},
    blog:{ type:String},
    linkedin:{ type:String},
    facebook:{ type:String},
    twitter:{ type:String},
    skype:{ type:String},
    rating:{ type:String},
    do_not_call:{ type:Boolean},
    deleted_at:{ type:Date},
    created_at:{ type:Date},
    updated_at:{ type:Date},
    background:{ type:String},
    business_address_attributes : [Addresses],
  });


var Addresses = new Schema({
    street1:{ type: String },
    street2:{ type: String },
    city:{ type:String},
    state:{ type:String},
    zipcode:{ type:String},
    country:{ type:String},
    full_address:{ type:String},
    address_type:{ type:String},
    addressable_id:{ type:ObjectId},
    addressable_type:{ type:String},
    created_at:{ type:Date},
    updated_at:{ type:Date},
    deleted_at:{type:Date},
    
});
var Tags = new Schema({
    name: { type: String}
});


var Field_Groups = new Schema({
    name:{ type: String },
    label:{ type: String },
    position:{ type:Number},
    hint:{ type:String},
    tag_id:{ type:ObjectId},
    created_at:{ type:Date},
    updated_at:{ type:Date},
    klass_name:{type:String},
});

 
 
/**
    * Model: LoginToken
    *
    * Used for session persistence.
    */
var LoginToken = new Schema({
    email:{ type: String, index: true },
    username: { type: String, index: true },
    series: { type: String, index: true },
    token: { type: String, index: true }
  });

  LoginToken.method('randomToken', function() {
    return Math.round((new Date().valueOf() * Math.random())) + '';
  });

  LoginToken.pre('save', function(next) {
    // Automatically create the tokens
    this.token = this.randomToken();

    if (this.isNew)
      this.series = this.randomToken();

    next();
  });

  LoginToken.virtual('id')
    .get(function() {
      return this._id.toHexString();
    });

  LoginToken.virtual('cookieValue')
    .get(function() {
      return JSON.stringify({username: this.username,  email: this.email, token: this.token, series: this.series });
    });


 
  mongoose.model('User', User);
  mongoose.model('Leads', Leads);
  mongoose.model('Addresses', Addresses);
  mongoose.model('Tags', Tags);
  mongoose.model('Field_Groups', Field_Groups);
  mongoose.model('LoginToken', LoginToken);
   
  fn();
}

exports.defineModels = defineModels;
 

