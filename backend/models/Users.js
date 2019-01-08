const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const validator = require('validator');
//WHAT IS VALIDATOR
//VALIDATOR WILL MAKE SURE THE EMAIL IS IN A EMAIL FORMAT SO WE DONT HAVE TO WORRY ABOUT IT AND WILL THROW A ERROR WHEN IT IS NOT A EMAIL
//DOCS  https://www.npmjs.com/package/validator
const passportLocalMongoose = require('passport-local-mongoose');
//WHAT IS LOCAL MONGOOSE??
//A PASSPORT PLUGIN THAT GIVES US METHODS TO HANDLE OUR USERS!!
// DOCS ----> https://www.npmjs.com/package/passport-local-mongoose
//WHAT DOES IT GIVE US
//MONGOOSE.MODEL('USER','USERSCHEMA') = USER -------------  USER.REGISTER(user,password,function(err,user){}) ---------- USER.CHANGEPASSWORD(req.body.password) WILL AUTOMATICALLY CHANGE THE PASSWORD OF THE USER LOGGED IN

const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true,
    validate: [validator.isEmail, 'Invalid Email Address'],
    required: 'Please supply a email address'
  },
  name: {
    type: String,
    trim: true,
    required: 'Please supply a name'
  }
});

UserSchema.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', UserSchema);
