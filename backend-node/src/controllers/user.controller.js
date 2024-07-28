const User = require("../models/user.model");
const { validationResult } = require("express-validator");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ status: "error", error: result.array() });
  }

  const { name, email, password } = req.body;
  const userIsExist = await User.findOne({ email: email });
  if (userIsExist) {
    res.status(400).json({
      status: "error",
      error: "This email already exists",
    });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const savedUser = await user.save();
    res.status(201).json({ status: "success", data: savedUser });
  } catch (err) {
    return res.status(500).json({ status: "error", errors: err });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email && !password) {
    res.status(403).json({
      status: "error",
      errors: "Please enter your email address or password",
    });
  }
  const user = await User.findOne({ email: email }, { __v: false, _id: false });
  if (!user) {
    return res
      .status(404)
      .json({ status: "404 not found", error: "User not found" });
  }
  const convertedPassword = await bcrypt.compare(password, user.password);
  if (convertedPassword) {
    res.status(200).json({ status: "success", data: user });
  } else {
    res.status(400).json({
      status: "error",
      error: "Incorrect password",
    });
  }
};

const getUser = async (req, res) => {
  const result = validationResult(req);
  if (!result.isEmpty()) {
    return res.status(422).json({ status: "error", error: result.array() });
  }
  const user = await User.findOne({ email: req.param.email });
  if (!user) {
    return res
      .status(404)
      .json({ status: "404 not found", error: "User not found" });
  }
  res.status(200).json({ status: "success", data: user });
};

const getUsers = async (req, res) => {
  const users = await User.find({}, { __v: false, _id: false });
  res.status(200).json({ status: "success", data: users });
};

module.exports = { register, login, getUsers, getUser };
