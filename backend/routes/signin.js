const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', function (req, res, next) {
    const isAuth = req.isAuthenticated();
    console.log(req,flash)
});

router.post('/', passport.authenticate('local'), function(req, res, next) {
    
})

// router.post('/', function(req, res, next) {
//     res.send({
//         email: req.body.email,
//         pass: req.body.password
//     })
// })


module.exports = router;