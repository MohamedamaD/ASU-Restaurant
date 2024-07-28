const Chef = require("../models/chef.model");
const { validationResult } = require("express-validator");
const getChefs = async (req, res) => {
  const chefs = await Chef.find({}, { __v: false });
  res.status(200).json({ status: "success", data: chefs });
};

const addChef = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty())
    return res.status(422).json({ status: "error", errors: errors.array() });
  const data = req.body;

  try {
    const chef = new Chef({ ...data });
    chef.save();
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(500).json({ status: "error", error: error.message });
  }
};

const deleteChef = async (req, res) => {
  const chef = await Chef.findByIdAndDelete(req.params.id);
  if (!chef)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success" });
};
const getChef = async (req, res) => {
  const chef = await Chef.findById(req.params.id);
  if (!chef)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success", data: chef });
};

module.exports = {
  getChefs,
  addChef,
  deleteChef,
  getChef,
};
