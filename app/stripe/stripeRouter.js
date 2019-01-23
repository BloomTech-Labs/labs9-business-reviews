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
    description: 'test charge',
})
console.log(res);
res.json({res});
});


module.exports = router;