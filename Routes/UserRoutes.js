const express = require('express');
const User = require('../models/Users');
const promisify = require('es6-promisify');
const passport = require('passport');

const router = express.Router();

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
