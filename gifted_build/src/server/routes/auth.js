const bcrypt = require('bcrypt')
const passport = require('passport')
const express = require('express')
const LocalStrategy = require('passport-local').Strategy
const { knex } = require('../database')
const router = express.Router();

passport.use(new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
}, async (username, password, done) => {
    try {
        const user = await findUser(username)
        if (!user) {
            return done(null, false, "User not found")
        }
        const isValid = validatePassword(user.hash, password)
        if (!isValid) {
            return done(null, false,"Incorrect password")
        }
        console.log("finished validating user")
        done(null, user)
    } catch (err) {
        done(err)
    }
}))

passport.serializeUser((user, done) => {
    console.log("in serialize")
    done(null, user.username)
})

passport.deserializeUser((sessionId, done) => {
    console.log("in deserialize")
    done(null, sessionId)
})

router.get('/test', (req, res) => {
    if (req.isAuthenticated()) {
        return res.end("secret api accessed")
    }
    res.end("log in first")
})

router.post('/logout', (req, res) => {
    if (req.user) {
        req.logout()
        req.session.destroy(err => {
            if (err) {
                return res.json({loggedOut: false, err})
            }
            return res.json({loggedOut: true})
        })
    } else  {
        return res.json({loggedOut: true, message: "User already logged out"})
    }
})

router.post('/login', (req, res, next) => {
    console.log("checking if user is authenticated")
    if(req.isAuthenticated()) {
        return res.json({isAuthorized: true, message: "User is already logged in"})
    }
    passport.authenticate('local', (err, user, info) => {
        console.log("in auth")
        if (err) {
            // Might be insecure to return internal errors in production?
            return res.json({isAuthorized: false, err})
        }
        if (!user) {
            return res.send({isAuthorized: false, message: info})
        }
        console.log("starting login")
        req.login(user, loginErr => {
            console.log("inside login callback")
            if (loginErr) {
                console.log("inside login err")
                console.log(loginErr)
                return res.json({isAuthorized: false, loginErr})
            }
            return res.send({isAuthorized: true, message: "User logged in"})
        })
    })(req, res, next)
})

async function findUser(username) {
    return knex('users')
            .where({username: username})
            .first()
}

async function validatePassword(hash, password) {
    return bcrypt.compare(hash, password)
}

// unused
async function setPassword(username, password) {
    const hash = await bcrypt.hash(password, 10)
    return knex('users')
               .where({username: username})
               .update({hash: hash})
}

module.exports = router
