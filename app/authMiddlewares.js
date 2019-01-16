//DO NOT TOUCH MADE BY CARLO
const jwt = require('jsonwebtoken');
const authConfig = require('./user/authConfig');
const session = require('express-session');
const passport = require('passport');
const expressValidator = require('express-validator');

const sessionConfig = {
  secret: 'keyboard cat',
  resave: false,
  key: 'Bonafind',
  saveUninitialized: false,
  // cookie: { maxAge: 1000 * 60 * 60 },
  store: authConfig.store
};

module.exports = server => {
  server.use(session(sessionConfig)),
    server.use(expressValidator()),
    server.use(passport.initialize()),
    server.use(passport.session());
};
