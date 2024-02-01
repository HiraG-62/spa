const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function (req, res, next) {
    const isAuth = req.isAuthenticated();
    req.send(isAuth)
});

router.post('/', passport.authenticate('local', {
        failureRedirect: '/signin',
        failureFlash: true
    }),
    (req, res) => {
        res.send('success')
    }
);


module.exports = router;