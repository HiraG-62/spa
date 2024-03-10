const express = require('express')
const knex = require('../db/knex')
const router = express.Router()
const bcrypt = require('bcrypt')
const passport = require('passport')

router.get('/', function (req, res, next) {
    const isAuth = req.isAuthenticated();
    
});

router.post('/', function post(req, res, next) {
    const isAuth = req.isAuthenticated();
    const email = req.body.email;
    const password = req.body.password;
    const repassword = req.body.repassword;

    knex('users')
        .where({ email: email })
        .select('*')
        .then(async function (result) {
            if (result.length !== 0) {
                
            } else if (password === repassword) {
                const hashedPassword = await bcrypt.hash(password, 10);
                knex('users')
                    .insert({ email: email, password: hashedPassword })
                    .then(function () {
                        passport.authenticate('local', function (err, user, info) {
                            if (err) { return next(err); }
                            if (!user) { return res.redirect('/signin'); }
                            req.logIn(user, function (err) {
                                if (err) { return next(err); }
                                knex('sub_threads')
                                    .insert({ name: '自分の投稿', main_thread_id: 2, user_id: user.id })
                                    .then()
                                res.send('success')

                                return 
                            });
                        })(req, res, next)
                    })
                    .catch(function (err) {
                        console.error(err);
                    });
            } else {
            }
        })
        .catch(function (err) {
            console.error(err);

        });
})

module.exports = router;