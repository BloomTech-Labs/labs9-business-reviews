const express = require('express');
const User = require('../models/Users');
const passport = require('passport');

const router = express.Router();

//USER.REGISTER IS AT THE PLUGIN USERSCHEMA.plugin(passportLocalMongoose,{usernameField:'email'})

router.post('/register', async (req, res) => {
  const user = new User({ email: req.body.email, name: req.body.name });
  //   const register = promisify(User.register);
  //   await register(user, req.body.password);
  User.register(user, req.body.password, function(err, user) {
    if (err) {
      console.log(err);
      return res.json({ message: 'Bad Request' });
    }
    res.json({ message: 'Check the schema' });
  });
});

//PASSPORT.AUTHENTICATE WILL TAKE IN A {email:"carlo",password:"carlo"} AS SPECIFIED IN USERSCHEMA.plugin(passportLocalMongoose,{usernameField:'email'})
//IF THEY GET AUTHENTICATED WHICH PASSPORT JS HANDLES ALL OF THE COMPLEXITIES WE WILL HAVE ACCESS THROUGH THE req.user req.logout() USER.setPassword() methods!!!
// WHERE DO YOU STORE THE req.user?? IT WAS INITIALIZE THROUGH const session = require('express-sessions') & mongostore = require('connect-mongo')(session)

router.post('/login', passport.authenticate('local'), function(req, res) {
  if (!req.user) {
    return res.json({ message: 'Invalid password or Invalid Username' });
  }
  res.json({ user: req.user });
});

router.get('/logout', (req, res) => {
  req.logout();
  res.json('you are now logged out');
});

module.exports = router;
