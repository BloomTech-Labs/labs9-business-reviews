const express = require('express');
const router = exprress.Router();
const stripe = require('./stripe')

const db = require('../db/dbinit');

router.post('/yearly', async(req, res) => {
const {token} = req.query;
const res = await stripe.create.charges({
    amount:'999',
    source: token,
    currency:'USD',
    description: 'test charge, yearly',
})
console.log(res);
res.json({res});
});

router.post('/monthly', async(req, res) => {
  const {token} = req.query;
  const res = await stripe.create.charges({
    amount:'99',
    source: token,
    currency:'USD',
    description: 'test charge, monthly',
  })
  console.log(res);
  res.json({res});
});


module.exports = router;