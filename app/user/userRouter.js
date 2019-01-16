const express = require('express');
const bcrypt = require('bcryptjs');
const md5 = require('md5');
const router = express.Router();
const userModel = require('../db/userModel/userModel');
const generateToken = require('../generateToken');
const passport = require('passport');

router.get('/', async (req, res) => {
  const response = await userModel.getUsers();
  res.status(200).json(response);
});

router.post('/register', async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    res.json({ message: 'You are missing one of these fields' });
  } else {
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
    await req.login(singleUser.id, function(err) {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
      }
      res.json({ message: 'Done' });
    });
  }
});

router.post(
  '/login',
  passport.authenticate('local', {
    successMessage: 'done',
    failureMessage: 'nope'
  }),
  async (req, res) => {
    if (req.user) {
      return res.json({ user: req.user });
    }
    res.json({ message: 'internal server error' });
  }
);

// router.post('/login', async (req, res) => {
//   if (!req.body.email)
//     return res.json({ message: 'You are missing a email field' });
//   if (!req.body.password)
//     return res.json({ message: 'You are missing a password field' });
//   const [singleUser] = await userModel.verifyLoginEmail(req.body.email);
//   const comparePasswords = bcrypt.compareSync(
//     req.body.password,
//     singleUser.password
//   );
//   if (!singleUser) {
//     return res.status(500).json({ message: 'no user found with such email' });
//   }
//   if (!comparePasswords) {
//     return res.status(500).json({ message: 'inputted password dont match!' });
//   }
//   if (singleUser && comparePasswords) {
//     //if authenticated return this!
//   }
// });

router.get('/me', async (req, res) => {
  if (!req.user) {
    res.json('No user logged in please login');
  }
  res.json({ user: req.user });
});

router.get('/logout', (req, res) => {
  if (!req.cookies.tokenId) {
    return res.status(500).json({ message: 'Cant logout without logging in!' });
  }
  req.clearCookie('tokenId');
  res.json({ message: 'Bye!' });
});

router.get('/:id', async (req, res) => {
  const [singleUser] = await userModel.getUserById(req.params.id);
  if (!singleUser) res.status(500).json({ message: 'No user found' });
  res.status(200).json({ singleUser });
});
module.exports = router;
