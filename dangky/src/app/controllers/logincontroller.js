const express = require('express')
const passport = require('passport') // Add missing import statement
const router = express.Router()

router.post('/login', (req, res, next) => {
    passport.authenticate('local', (err, user, info) => {
        if (err) {
            return next(err)
        }
        if (!user) {
            return res.redirect('/login')
        }
        req.logIn(user, (err) => {
            if (err) {
                return next(err)
            }
            return res.redirect('/users/' + user.username)
        })
    })(req, res, next)
})

module.exports = router
