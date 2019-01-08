const express = require('express');
const router = express.Router();
const Business = require('../models/Business');

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    console.log('yeah!');
    return next();
  }
  res.json({ message: 'You must login to do this' });
}

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
