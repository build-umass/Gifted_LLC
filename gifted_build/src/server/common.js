const express = require('express');
const bodyParser = require('body-parser')
const session = require('express-session')
const sessionFileStore = require('session-file-store')(session)
const passport = require('passport')

module.exports.createBackendServer = ({secret}) => {
    const server = express()

    server.use(bodyParser.urlencoded({extended: false}))
    server.use(bodyParser.json())
    server.use(require('./routes/products'));

    server.use(session({
        secret: secret,
        store: new sessionFileStore(),
        resave: false, //According to express docs, can set resave to false if session.touch is implemented?
        saveUninitialized: false, // Only logged-in sessions are saved?
        rolling: true, // If user interacts with the API, then maxAge is extended
        cookie: {
            maxAge: 1000 * 60 * 15 //15 minutes
        },
    }))

    server.use(passport.initialize())
    server.use(passport.session())

    server.use('/auth', require('./routes/auth'))
    return server
}
