const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const db = require('../db/dbinit');

router.post('/yearly', async(req, res) => {
  const {token} = req.query;
  const email = token.email;
  console.log("EMAIL: ", email);
  const response = await stripe.customers.create({
    email: email,
    source: token
  })
  .then(customer => {
    stripe.charges.create({
      amount: 999,
      description: "Yearly Subscription Charge",
      currency: "usd",
      customer: customer.id
    })
  })
  res.json({response});
})

router.post('/monthly', async(req, res) => {
  const {token} = req.query;
  const email = token.email;
  console.log("EMAIL: ", email);
  const response = await stripe.customers.create({
    email: email,
    source: token
  })
  .then(customer => {
    stripe.charges.create({
      amount: 99,
      description: "Monthly Subscription Charge",
      currency: "usd",
      customer: customer.id
    })
  })
  res.json({response});
})

module.exports = router;