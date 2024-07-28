const Testimonial = require("../models/testimonial.model");
const { validationResult } = require("express-validator");

const getTestimonials = async (req, res) => {
  const testimonials = await Testimonial.find({}, { __v: false });
  res.status(200).json({ status: "success", data: testimonials });
};

const addTestimonial = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "bad", errors: errors.array() });
  }
  const data = req.body;

  try {
    const testimonial = new Testimonial({ ...data });
    testimonial.save();
    res.status(201).json({ status: "success" });
  } catch (err) {
    res.status(400).json({ status: "bad", error: err.message });
  }
};

const deleteTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findByIdAndDelete(req.params.id);
  if (!testimonial)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success" });
};
const getTestimonial = async (req, res) => {
  const testimonial = await Testimonial.findById(req.params.id);
  if (!testimonial)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success", data: testimonial });
};

module.exports = {
  getTestimonials,
  addTestimonial,
  deleteTestimonial,
  getTestimonial,
};
