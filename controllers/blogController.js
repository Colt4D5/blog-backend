const Post = require('../models/blogPostSchema');


exports.getAllPosts = async (req, res) => {
  try {
    const allPosts = await Post.find()
    res.status(200).json({
      status: 'ok',
      data: allPosts
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error.message
    })
  }
}

exports.createNewPost = async (req, res) => {
  try {
    const { title, body } = req.body
    if (!title || !body) return res.json({ status: 'fail', message: 'Please include title and content'})
    const newPost = new Post({ title, body })
    await newPost.save()
    res.status(201).json({
      status: 'ok',
      data: newPost
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error.message
    })
  }
}

exports.deletePostById = async (req, res) => {
  try {
    const { id } = req.body
    const postToDelete = await Post.findOne({ _id: id })
    if (!postToDelete) return res.json({ status: 'fail', message: 'Sorry, could not find that post'})
    await Post.deleteOne(postToDelete)
    const allPosts = await Post.find()
    res.json({
      status: 'ok',
      message: `Post deleted`,
      data: allPosts
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error.message
    })
  }
}

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params
    const post = await Post.findOne({ _id: id })
    if (!post) return res.status(404).json({
      status: 'fail',
      message: 'Sorry, could not find post.'
    })
    res.status(200).json({
      status: 'ok',
      data: post
    })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error.message
    })
  }
}

exports.deletePostByParamsId = async (req, res) => {
  const { id } = req.params
  const postToDelete = await Post.findOne({ _id: id })
  if (!postToDelete) return res.json({ status: 'fail', message: 'Sorry, could not find that post'})
  await Post.deleteOne(postToDelete)
  const allPosts = await Post.find()
  res.json({
    status: 'ok',
    message: `Post deleted`,
    data: allPosts
  })
}

exports.updatePostById = async (req, res) => {
  try {
    const { id } = req.params
    const { title, body } = req.body
    const originalPost = Post.findOne({ _id: id })
    const update = { title, body }
    const updatedPost = await Post.findOneAndUpdate(originalPost, update, { new: true })
    res.json({ status: 'ok', message: 'Post updated!', updatedPost })
  } catch (error) {
    res.json({
      status: 'fail',
      message: error.message
    })
  }
}