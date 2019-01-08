const passport = require('passport');
const mongoose = require('mongoose');
const User = require('../models/Users');
//THIS WILL TELL PASSPORT WHAT TO DO AFTER THEY BECAME AUTHENTICATED

//Create the local strategy for passport
passport.use(User.createStrategy());

//'https://www.npmjs.com/package/passport-local-mongoose' HERE ARE THE DOCS FOR IT

//Tells passport to put the user in every single request through the sessions!!! will be stored as req.user
passport.serializeUser(User.serializeUser());
//Tells passport what to do when we hit req.logout() AND REMOVE THE USERS INFORMATION AS req.user!!!
passport.deserializeUser(User.deserializeUser());
