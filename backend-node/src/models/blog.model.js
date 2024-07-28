const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  publicationDate: {
    type: Date,
    required: true,
    default: Date.now(),
  },
  details: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;
