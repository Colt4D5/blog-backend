const router = require('express').Router()

const blogController = require('../controllers/blogController.js')

router
  .route('/')
    .get(blogController.getAllPosts)
    .post(blogController.createNewPost)

module.exports = router