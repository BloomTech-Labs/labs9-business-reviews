const express = require('express');
const router = express.Router();
const stripe = require("stripe")(process.env.STRIPE_SECRET);

router.post("/charge", async (req, res) => {
  try {
    let
  }
})



app.post("/charge", async (req, res) => {
    try {
      let {status} = await stripe.charges.create({
        amount: 2000,
        currency: "usd",
        description: "An example charge",
        source: req.body
      });
  
      res.json({status});
    } catch (err) {
      res.status(500).end();
    }
  });
  

module.exports = router;