const Menu = require("../models/menu.model");
const { validationResult } = require("express-validator");

const getMenus = async (req, res) => {
  const menus = await Menu.find({}, { __v: false });
  res.status(200).json({ status: "success", data: menus });
};

const addMenu = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(422).json({ status: "bad", errors: errors.array() });
  }
  const data = req.body;
  try {
    const menu = new Menu({ ...data });
    menu.save();
    res.status(201).json({ status: "success" });
  } catch (error) {
    res.status(400).json({ status: "bad", error: error.message });
  }
};

const deleteMenu = async (req, res) => {
  const menu = await Menu.findByIdAndDelete(req.params.id);
  if (!menu)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success" });
};
const getMenu = async (req, res) => {
  const menu = await Menu.findById(req.params.id);
  if (!menu)
    return res.status(404).json({ status: " 404 Not Found", data: [] });
  res.status(200).json({ status: "success", data: menu });
};

module.exports = {
  getMenus,
  addMenu,
  deleteMenu,
  getMenu,
};
