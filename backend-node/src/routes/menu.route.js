const { body } = require("express-validator");
const {
  getMenus,
  addMenu,
  getMenu,
  deleteMenu,
} = require("../controllers/menu.controller");

const Router = require("express").Router();

Router.get("/", getMenus)
  .post(
    "/",
    [body("title").notEmpty().withMessage("field is required")],
    addMenu
  )
  .get("/:id", getMenu)
  .delete("/:id", deleteMenu);

module.exports = Router;
