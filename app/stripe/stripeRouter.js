const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const db = require('../db/dbinit');

router.post('/yearly', async (req, res) => {
const {token} = req.query;
const response = await stripe.charges.create({
    amount:'999',
    source: token,
    currency:'USD',
    description: 'test charge, yearly',
  })
  console.log(response);
  res.json({response});
});

router.post('/monthly', async (req, res) => {
  const {token} = req.query;
  const response = await stripe.charges.create({
    amount:'99',
    source: token,
    currency:'USD',
    description: 'test charge, monthly',
  })
  console.log(response);
  res.json({response});
});


module.exports = router;