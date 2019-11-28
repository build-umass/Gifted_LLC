// Recursively search directories until .env file is found
require('dotenv').config({ path: require('find-config')('.env')})
const env = process.env
module.exports = {
    stripe: {
        publicKey: env.STRIPE_publicKey,
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



