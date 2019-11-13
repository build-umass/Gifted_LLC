const knexConstructor = require('knex')
let knex;
  
var fs = require('fs')
const ini = require('ini');
const config = ini.parse(fs.readFileSync(process.env.database_configs, 'utf-8'));
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
