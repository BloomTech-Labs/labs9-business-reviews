const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
const authConfig = require('../user/authConfig');
const userModel = require('../db/userModel/userModel');

router.post('/yearly', authConfig.isLoggedIn, async (req, res) => {
  const [user] = req.user;
  const { token, amount } = req.query;
  const response = await stripe.charges.create({
    source: token,
    currency: 'USD',
    amount
  });
  user.subscription = Date.now() + 1000 * 60 * 60 * 24 * 30 * 12;
  await userModel.updateUser(user.id, user);
  res.json({ response });
});

router.post('/monthly', authConfig.isLoggedIn, async (req, res) => {
  const [user] = req.user;
  const { token } = req.query;
  const email = token.email;
  const response = await stripe.customers.create({
    email: email,
    source: token
  })
  .then(customer => {
    stripe.charges.create({
      amount: 99,
      description: "Monthly Subscription Charge",
      currency: 'usd',
      customer: customer.id
    })
  })
  user.subscription = Date.now() + 1000 * 60 * 60 * 24 * 30;
  await userModel.updateUser(user.id, user);
  res.json({ response });
});

module.exports = router;
