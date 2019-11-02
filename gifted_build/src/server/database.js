const knexConstructor = require('knex')
let knex;
// Temporary: We can determine the actual method of figuring out which environment (dev or prod),
// and figuring out how to connect to the DB later.
// Knex has the option to provide a knexfile, with different configurations for dev vs prod
if (process.env.NODE_ENV == 'production') {
    knex = knexConstructor({ /* insert production configuration */ })
} else {
    knex = knexConstructor({
        client: 'pg',
        connection: {
          user: 'build',
          host: 'localhost',
          database: 'api',
          password: 'password',
          port: 5432
        },
        pool: { min: 0, max: 5 } // no logic to these numbers
    })
}

module.exports.knex = knex
