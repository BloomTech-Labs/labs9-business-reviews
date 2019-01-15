const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

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

// G E T   A L L  B U I S N E S S E S
router.get('/', (req, res) => {
  db('businesses')
    .then(business => res.status(200).json(business))
    .catch(err => res.status(500).json(err));
});

// G E T  B Y  I D
router.get('/:id', (req, res) => {
  const { id } = req.params;

  db('businesses')
    .where({ id: id })
    .first()
    .then(business => {
      if (business)
        db('businesses')
          .where({ id: id })
          .then(business => {
            res.status(200).json(business);
          })
          .catch(err => res.status(500).json(err));
    });
});

// U P D A T E  B U S I N E S S
router.put('/:id', (req, res) => {
  const changes = req.body;
  const { id } = req.params;

  db('businesses')
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

// D E L E T E  B U S I N E S S
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  db('businesses')
    .where({ id: id })
    .del()
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = router;
