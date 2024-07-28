const {
  getBlogs,
  addBlog,
  getBlog,
  deleteBlog,
} = require("../controllers/blog.controller");
const { body } = require("express-validator");
const Router = require("express").Router();

Router.get("/", getBlogs)
  .get("/:id", getBlog)
  .post(
    "/",
    [
      body("details").notEmpty().withMessage("field is required"),
      body("img").notEmpty().withMessage("field is required"),
    ],
    addBlog
  ).delete('/:id', deleteBlog);

module.exports = Router;
