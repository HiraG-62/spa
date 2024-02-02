const express = require('express')
const router = express.Router()
const knex = require('../db/knex')


/* GET home page. */
router.get('/', function (req, res, next) {
  const isAuth = req.isAuthenticated();

  if (isAuth) {
    const userId = req.user.id;
    knex('sub_threads')
      .select('*')
      .where({ user_id: userId })
      .then(function (results) {
        res.send({
          isAuth: isAuth,
          subThreads: results,
          userId: userId
        })
      })
      .catch(function (err) {
        console.error(err);
      })
  } else {
    res.send({
      isAuth: isAuth
    })
  }
});

router.post('/content', function (req, res, next) {
  const isAuth = req.isAuthenticated();
  const post = req.body.contents;
  const subThreadIndex = req.body.sub_thread_index
  const date = new Date().toLocaleString('sv').replace(/-/g, '/').slice(0, -3);

  knex('posts')
    .insert({ 'contents': post, 'date': date })
    .then(function () {
    })
    .catch(function (err) {
      console.error(err);
    })
});

router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));
// router.use('/mypage', require('./mypage'));
// router.use('/lab', require('./lab'));
// router.use('/manage', require('./manage'));

module.exports = router;