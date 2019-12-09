const dbConfig  = require('./config').database
const knexConstructor = require('knex')
const knex = knexConstructor({
    client: 'pg',
    connection: {
      user: dbConfig.user,
      host: dbConfig.host,
      database: dbConfig.name,
      password: dbConfig.password,
      port: dbConfig.port,
    },
    pool: { min: 0, max: 5 } // no logic to these numbers
})

module.exports.knex = knex
