const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const passport = require('passport');
const express = require('express');

module.exports = server => {
  server.use(cookieParser()),
    server.use(
      session({
        secret: 'dont tell anybody',
        key: 'cookie',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection })
      })
    ),
    server.use(express.urlencoded({ extended: true })),
    server.use(passport.initialize()),
    server.use(passport.session()),
    server.use(express.json());
};
