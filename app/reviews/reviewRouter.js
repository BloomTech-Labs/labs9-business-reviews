const express = require('express');
const router = express.Router();
const authConfig = require('../user/authConfig');

const db = require('../db/dbinit');

//CREATE
router.post('/', authConfig.isLoggedIn, (req, res) => {
  const [user] = req.user;
  if (!user.subscription || user.subscription < Date.now())
    return res.json({ message: 'Subscription is expired or nonexistent' });
  req.body.reviewer_id = user.id;
  const review = req.body;
  db('reviews')
    .insert(review)
    .then(ids => {
      res.status(201).json(ids);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET ALL
router.get('/', (req, res) => {
  db('reviews')
    .then(review => {
      res.status(200).json(review);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

//GET BY ID
router.get('/:id', (req, res) => {
  const { id } = req.params;
  db('reviews')
    .where({ id })
    .then(review => {
      res.status(200).json(review);
    })
    .catch(err => {
      res.status(500).json(err);
    });
});
//PUT
router.put('/:id', authConfig.isLoggedIn, (req, res) => {
  const [user] = req.user;
  const changes = req.body;
  const { id } = req.params;
  if (changes.reviewer_id !== user.id)
    return res.json({ message: 'Not your review bounce' });

  db('reviews')
    .where({ id: id })
    .update(changes)
    .then(count => {
      res.status(200).json(count);
    })
    .catch(err => res.status(500).json(err));
});
//DELETE
router.delete('/:id', (req, res) => {
  const { id } = req.params;
  db('reviews')
    .where({ id })
    .del()
    .then(count =>
      count
        ? res.status(200).json({ message: 'Deleted' })
        : res.status(404).json({ message: 'Could not find that review' })
    )
    .catch(err => {
      res.status(500).json({ err });
    });
});

module.exports = router;
