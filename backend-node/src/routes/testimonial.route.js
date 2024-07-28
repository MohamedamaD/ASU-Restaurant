const { body } = require("express-validator");
const {
  getTestimonials,
  deleteTestimonial,
  getTestimonial,
  addTestimonial,
} = require("../controllers/testimonial.controller");

const Router = require("express").Router();

Router.get("/", getTestimonials)
  .post(
    "/",
    [
      body("img").notEmpty().withMessage("field is required"),
      body("name").notEmpty().withMessage("field is required"),
      body("position").notEmpty().withMessage("field is required"),
      body("feedback").notEmpty().withMessage("field is required"),
    ],
    addTestimonial
  )
  .delete("/:id", deleteTestimonial)
  .get("/:id", getTestimonial);

module.exports = Router;
