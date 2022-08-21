const mongoose = require('mongoose');
const { Schema } = mongoose;

const blogSchema = new Schema({
  title:  {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    default: 'Colton Allen'
  },
  body: {
    type: String,
    required: true
  },
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model('blogPosts', blogSchema);