const express = require('express');
const router = express.Router();
const knex = require('knex');
const knexConfig = require('../knexfile');

const db = knex(knexConfig.development);

//CREATE
router.post('/', (req, res) => {
    const review = req.body;
    db('reviews')
        .insert(review)
        .then((ids) => {
            res.status(201).json(ids)
        })
        .catch((err) => {
			res.status(500).json(err);
		})
});

//GET ALL
router.get('/', (req, res) => {
	db('reviews')
		.then((review) => {
			res.status(200).json(review);
		})
		.catch((err) => {
			res.status(500).json(err);
		})
});


//GET BY ID
router.get('/:id', (req, res) => {
	const { id } = req.params;
	db('reviews')
		.where({ id })
		.then((review) => {
			res.status(200).json(review);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

//DELETE
router.delete('/:id', (req, res) => {
	const { id } = req.params;
    db('reviews')
        .where({ id })
        .del()
        .then((count) => {
            res.status(200).json(count)
        .catch((err) => {
			res.status(500).json(err);
		});
	});
});

module.exports = router;