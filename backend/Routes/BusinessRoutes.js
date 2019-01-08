const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

//BECAUSE OF OUR INITIAL SET UP req.isAuthenticated() req.user req.logout() ARE AVAILABLE TO US!!

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('yeah!');
    return next();
  }
  res.json({ message: 'You must login to do this' });
}

//MONGO DB COLLECTION METHODS DOCS!!!!
// DOCS ---> https://docs.mongodb.com/manual/reference/method/

router.post('/', isAuthenticated, async (req, res) => {
  req.body.author = req.user._id;
  const business = await new Business(req.body).save();
  res.json(business);
});

router.get('/', async (req, res) => {
  const Businesses = await Business.find().populate('author');
  res.json(Businesses);
});

module.exports = router;
