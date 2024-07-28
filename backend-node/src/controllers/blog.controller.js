const Blog = require("../models/blog.model");
const { validationResult } = require("express-validator");

const getBlogs = async (req, res) => {
  const blogs = await Blog.find({}, { __v: false });
  res.status(200).json({ status: "success", data: blogs });
};

const getBlog = async (req, res) => {
  const blog = await Blog.findById(req.params.id);
  if (!blog)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success", data: blog });
};

const addBlog = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "bad", errors: errors.array() });
  }
  const data = req.body;
  try {
    const blog = new Blog({ ...data });
    blog.save();
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ status: "bad", error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  const blog = await Blog.findByIdAndDelete(req.params.id);
  if (!blog)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success" });
};

module.exports = {
  getBlogs,
  addBlog,
  getBlog,
  deleteBlog,
};
