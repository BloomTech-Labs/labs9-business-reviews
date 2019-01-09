const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../db/knexfile');

const db = knex(knexConfig.development);

// P O S T
router.post('/', (req, res) => {
  const business = req.body;

  db('businesses')
    .insert(business)
    .returning('id')
    .then(id => {
      res.status(201).json(id);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
