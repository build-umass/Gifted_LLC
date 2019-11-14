const config = require('./config')
const knexConstructor = require('knex')
let knex;

knex = knexConstructor({
    client: 'pg',
    connection: {
      user: config.postgresql.user,
      host: config.postgresql.host,
      database: config.postgresql.database,
      password: config.postgresql.password,
      port: config.postgresql.port,
    },
    pool: { min: 0, max: 5 } // no logic to these numbers
})

module.exports.knex = knex
