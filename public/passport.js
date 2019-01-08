const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/Users');
//THIS WILL TELL PASSPORT WHAT TO DO AFTER THEY BECAME AUTHENTICATED

//Create the local strategy for passport
passport.use(User.createStrategy());

//Tells passport to put the user in every single request
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());
