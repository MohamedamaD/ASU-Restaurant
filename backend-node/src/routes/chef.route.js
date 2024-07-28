const {
  getChefs,
  addChef,
  getChef,
  deleteChef,
} = require("../controllers/chef.controller");
const { body } = require("express-validator");

const Router = require("express").Router();

Router.get("/", getChefs)
  .post(
    "/",
    [
      body("img").notEmpty().withMessage("field is required"),
      body("name").notEmpty().withMessage("field is required"),
      body("position").notEmpty().withMessage("field is required"),
    ],
    addChef
  )
  .delete("/:id", deleteChef)
  .get("/:id", getChef);

module.exports = Router;
