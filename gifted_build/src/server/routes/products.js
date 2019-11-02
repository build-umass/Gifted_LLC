const knex = require('knex')({
    client: 'pg',
    connection: {
      user: 'build',
      host: 'localhost',
      database: 'api',
      password: 'password',
      port: 5432
    },
    pool: { min: 0, max: 5 } // no logic to these numbers
}); // Without this semicolon the program will break b/c Javascript has a silly parser.
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
