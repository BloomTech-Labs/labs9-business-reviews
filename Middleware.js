//COOKIES ARE A WAY TO SEE IF USER IS AUTHENTICATED OR NOT!!
const cookieParser = require('cookie-parser');
//WE NEED MONGOOSE TO PUT OUR DATABASE CONNECTION TO THE STORE PROPERTY IN SESSIONS
const mongoose = require('mongoose');
//A WAY TO STORE THE USERS DATA THROUGH    req.user      ON EACH REQUESTS
const session = require('express-session');
// THIS TELLS OUR SESSION TO USE THE DATABASE THROUGH THE MONGODB CONNECTION = 'mongodb://carlo:carloc1@ds049436.mlab.com:49436/business-reviews-labs'
const MongoStore = require('connect-mongo')(session);
// THIS OAUTH LIBRARY HANDLES OUR USERS AUTHENTICATION
const passport = require('passport');
// WE NEED TO PARSE THE BODY WHEN IT COMES IN
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
