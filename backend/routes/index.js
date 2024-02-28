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
      .whereRaw(`sub_threads.id = sub_thread_id and sub_threads.user_id = ${userId}`)
      .then(function (postData) {
        knex('sub_threads')
          .select(knex.raw('*, sub_threads.name as sub_name, sub_threads.id as sub_id'))
          .join('main_threads')
          .whereRaw(`main_threads.id = main_thread_id and sub_threads.user_id = ${userId}`)
          .then(function (threadData) {
            knex('main_threads')
              .select('*')
              .then(function (mainThreads) {
                knex('users')
                  .select('*')
                  .where({ 'id': userId})
                  .then(function(userData) {
                    res.send({
                      isAuth: isAuth,
                      mainThreads: mainThreads,
                      threads: threadData,
                      posts: postData,
                      users: userData
                    })
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

router.get('/managelabs', function (req, res, next) {
  knex('labs')
    .select('*')
    .then(function (labsResults) {
      knex('users')
        .select('*')
        .then(function (usersResults) {
          res.send({
            labs: labsResults,
            users: usersResults
          })
        })
    })
})

router.post('/content', function (req, res, next) {
  const isAuth = req.isAuthenticated();
  const name = req.user.name
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

router.post('/addsubThread', function (req, res, next) {
  const userId = req.user.id
  const subThreadName = req.body.threadName
  const mainThreadId = req.body.mainThreadId

  knex('sub_threads')
    .insert({ 'name': subThreadName, 'main_thread_id': mainThreadId, 'user_id': userId })
    .then(function (results) {
      res.send('added')
    })
})


router.use('/signup', require('./signup'));
router.use('/signin', require('./signin'));
router.use('/logout', require('./logout'));
// router.use('/mypage', require('./mypage'));
// router.use('/lab', require('./lab'));
// router.use('/manage', require('./manage'));

module.exports = router;