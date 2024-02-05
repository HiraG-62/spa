const express = require('express')
const router = express.Router()
const knex = require('../db/knex')


/* GET home page. */
router.get('/', function (req, res, next) {
  const isAuth = req.isAuthenticated();

  if (isAuth) {
    const userId = req.user.id;
    knex('posts')
      .select(knex.raw('*, main_threads.name as main, sub_threads.name as sub'))
      .joinRaw('join main_threads as, sub_threads')
      .whereRaw('main_threads.id = main_thread_id and sub_threads.id = sub_thread_id')
      .then(function (results) {
        res.send({
          isAuth: isAuth,
          postData: results
        })
      })
      // .then(function (results) {
      //   res.send({
      //     isAuth: isAuth,
      //     postData: results
      //   })
      // })
    // knex('sub_threads')
    //   .select('*')
    //   .where({ user_id: userId })
    //   .then(function (results) {
    //     res.send({
    //       isAuth: isAuth,
    //       subThreads: results,
    //       userId: userId
    //     })
    //   })
    //   .catch(function (err) {
    //     console.error(err);
    //   })
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
    .insert({'sub_thread_id': subThreadId, 'contents': post, 'date': date })
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