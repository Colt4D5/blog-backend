const Post = require('../models/blogPostSchema');


exports.getAllPosts = async (req, res) => {
  const allPosts = await Post.find()
  res.status(200).json({
    status: 'ok',
    data: allPosts
  })
}

exports.createNewPost = async (req, res) => {
  const { title, body } = req.body
  if (!title || !body) return res.json({ status: 'fail', message: 'Please include title and content'})
  const newPost = new Post({ title, body })
  await newPost.save()
  res.status(201).json({
    status: 'ok',
    data: newPost
  })
}