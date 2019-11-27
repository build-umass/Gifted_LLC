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
        .catch(err => {
            //TODO: We probably don't want to expose errors in production?
            res.end(JSON.stringify(err))
        })
})

module.exports = router;
