const router = require('express').Router()

const blogController = require('../controllers/blogController.js')

router
  .route('/')
    .get(blogController.getAllPosts)
    .post(blogController.createNewPost)
    .delete(blogController.deletePostById)

router
  .route('/:id')
    .get(blogController.getPostById)
    .delete(blogController.deletePostByParamsId)
    .patch(blogController.updatePostById)

module.exports = router