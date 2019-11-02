const { knex } = require('../database')
const express = require('express');
const router = express.Router();

router.get('/products/all', (req, res) => {
    knex('products')
        .select()
        .then(rows => {
            console.log(rows)
            res.json(rows)
        })
        .catch(err => res.end({err: err}))
})

module.exports = router;
