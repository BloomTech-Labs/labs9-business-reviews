const express = require('express');
const router = express.Router();
const Review = require('../models/Reviews');

function isAuthenticated(req, res, next) {
  if (req.isAuthenticated()) {
    return next();
  }
  res.json({ message: 'You are not allowed to do that' });
}

router.post('/stores/:id', isAuthenticated, async (req, res) => {
  console.log(req.params.id);
  req.body.author = req.user._id;
  req.body.business = req.params.id;
  const review = await new Review(req.body).save();
  res.json(review);
});

module.exports = router;
