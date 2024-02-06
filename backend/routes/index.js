const express = require('express')
const router = express.Router()
const knex = require('../db/knex')


/* GET home page. */
router.get('/', function (req, res, next) {
  const isAuth = req.isAuthenticated();

  if (isAuth) {
    const userId = req.user.id;
    knex('sub_threads')
      .select(knex.raw('*, sub_threads.id as sub_id'))
      .join('posts')
      .whereRaw(`sub_threads.id = sub_thread_id and user_id = ${userId}`)
      .then(function (postData) {
        knex('sub_threads')
          .select(knex.raw('*, sub_threads.name as sub_name, sub_threads.id as sub_id'))
          .join('main_threads')
          .whereRaw(`main_threads.id = main_thread_id and user_id = ${userId}`)
          .then(function (threadData) {
            knex('main_threads')
              .select('*')
              .then(function (mainThreads) {
                res.send({
                  isAuth: isAuth,
                  mainThreads: mainThreads,
                  threads: threadData,
                  posts: postData
                })
              })
          })
      })
  } else {
    res.send({
      isAuth: isAuth
    })
  }
});

router.post('/content', function (req, res, next) {
  const isAuth = req.isAuthenticated();
  const post = req.body.content
  const subThreadId = req.body.subThreadId
  const date = new Date().toLocaleString('sv').replace(/-/g, '/').slice(0, -3);

  knex('posts')
    .insert({ 'sub_thread_id': subThreadId, 'contents': post, 'date': date })
    .then(function () {
      res.send('posted')
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