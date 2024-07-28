const Router = require("express").Router();
const { param, body } = require("express-validator");
const {
  getUsers,
  getUser,
  register,
  login,
} = require("../controllers/user.controller");

Router.get("/", getUsers);

Router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("field is required"),
    body("email")
      .notEmpty()
      .isEmail()
      .withMessage("field must be email - required"),
    body("password")
      .isStrongPassword()
      .notEmpty()
      .withMessage("field must be strong password - required"),
  ],
  register
);

Router.get(
  "/:email",
  [param("email").isEmail().withMessage("field must be email")],
  getUser
);

Router.post("/login", login);

module.exports = Router;
