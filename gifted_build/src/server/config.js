// Recursively search directories until .env file is found
require('dotenv').config({ path: require('find-config')('.env', {home: false})})
const env = process.env
module.exports = {
    stripe: {
        publishableKey: env.STRIPE_publishableKey,
        secretKey: env.STRIPE_secretKey
    },
    database: {
        user: env.DB_user,
        host: env.DB_host,
        name: env.DB_name,
        password: env.DB_password,
        port: env.DB_port
    }
}



