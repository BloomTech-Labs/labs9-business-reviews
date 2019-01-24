const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post("/monthly", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 99,
      currency: "usd",
      description: "Monthly Subscription Charge",
      source: req.body
    });
    console.log(status)
    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});


module.exports = router;