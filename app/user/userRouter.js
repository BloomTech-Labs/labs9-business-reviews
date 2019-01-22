const express = require('express');
const md5 = require('md5');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userModel = require('../db/userModel/userModel');
const passport = require('passport');
const authConfig = require('./authConfig');

router.get('/', async (req, res) => {
  const response = await userModel.getUsers();
  res.status(200).json(response);
});

router.post('/register', authConfig.checkCreds, async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 3);
  req.body.password = hash;

  //http://en.gravatar.com/site/implement/images/ getting gravatar docs
  const email = req.body.email;
  email.toLowerCase();
  const gravatarHashedEmail = await md5(email);
  const gravatarLink = `https://www.gravatar.com/avatar/${gravatarHashedEmail}?s=200`;
  req.body.gravatar = gravatarLink;
  const registerUserId = await userModel.register(req.body);
  if (!registerUserId)
    return res
      .status(500)
      .json({ message: `User with email ${email} already exists!` });
  const [singleUser] = await userModel.verifyLoginEmail(email);
  req.login(singleUser.id, function(err) {
    if (err) {
      console.log(err);
      return res.status(500).json({ message: 'Internal server error' });
    }
    res.json({ message: 'Done' });
  });
});

router.post(
  '/login',
  authConfig.alreadyLoggedIn,
  passport.authenticate('local', {
    successMessage: 'done',
    failureMessage: 'nope'
  }),
  (req, res) => {
    if (req.user) {
      return res.json({ user: req.user });
    }
    res.json({ message: 'internal server error' });
  }
);

router.get('/me', async (req, res) => {
  if (!req.user) {
    return res.json('No user logged in please login');
  }
  res.json({ user: req.user });
});

router.get('/logout', authConfig.isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.json({ message: 'Bye!' });
});

router.get('/:id', async (req, res) => {
  const [singleUser] = await userModel.getUserById(req.params.id);
  if (!singleUser) res.status(500).json({ message: 'No user found' });
  res.status(200).json({ singleUser });
});

router.put('/:id', async (req, res) => {
  const hash = bcrypt.hashSync(req.body.password, 3);
  req.body.password = hash;
  const email = req.body.email;
  email.toLowerCase();
  const gravatarHashedEmail = await md5(email);
  const gravatarLink = `https://www.gravatar.com/avatar/${gravatarHashedEmail}?s=200`;
  req.body.gravatar = gravatarLink;
  await userModel.updateUser(req.params.id, req.body);
  res.json({ message: 'Successfully updated' });
});
module.exports = router;
