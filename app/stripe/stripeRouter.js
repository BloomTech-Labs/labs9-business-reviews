const express = require('express');
const router = express.Router();
const stripe = require('stripe')('sk_test_hFDCdUMSwiOhnZrrInQJYrax');
const authConfig = require('../user/authConfig');
const userModel = require('../db/userModel/userModel');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
console.log(process.env.SENDGRID_API_KEY, 'mail creds');

function makeANiceEmail(text) {
  return `
  <div className="email" style="
  border:1px solid black;
  padding:20px;
  font-family: sans-serif;
  line-height:2;
  font-size:20px;
  ">
  <h2>Hello There!</h2>
  <p>${text}</p>
  </div>
  `;
}

router.post('/yearly', authConfig.isLoggedIn, async (req, res) => {
  const [user] = req.user;
  const { token } = req.query;
  const email = token.email;
  const response = await stripe.customers
    .create({
      email: email,
      source: token
    })
    .then(customer => {
      stripe.charges.create({
        amount: 999,
        description: 'Yearly Subscription Charge',
        currency: 'usd',
        customer: customer.id
      });
    });
  user.subscription = Date.now() + 1000 * 60 * 60 * 24 * 30 * 12;
  await userModel.updateUser(user.id, user);
  const msg = {
    to: user.email,
    from: 'bonafind@biz.com',
    subject: 'Bonafind Billing',
    text: 'Sent from labs 9 Business Review',
    html: makeANiceEmail(
      `This email is notifying you that you're getting a 1 year subscription to our site`
    )
  };
  await sgMail.send(msg);
  res.json({ response });
});

router.post('/monthly', authConfig.isLoggedIn, async (req, res) => {
  const [user] = req.user;
  const { token } = req.query;
  const email = token.email;
  const response = await stripe.customers
    .create({
      email: email,
      source: token
    })
    .then(customer => {
      stripe.charges.create({
        amount: 99,
        description: 'Monthly Subscription Charge',
        currency: 'usd',
        customer: customer.id
      });
    });
  user.subscription = Date.now() + 1000 * 60 * 60 * 24 * 30;
  await userModel.updateUser(user.id, user);
  const msg = {
    to: user.email,
    from: 'bonafind@biz.com',
    subject: 'Bonafind Billing',
    text: 'Sent from labs 9 Business Review',
    html: makeANiceEmail(
      `This email is notifying you that you're getting a 1 month subscription to our site`
    )
  };
  await sgMail.send(msg);
  res.json({ response });
});

module.exports = router;
