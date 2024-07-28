const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
  title: { type: String, required: true },
  menuItems: [
    {
      img: {
        type: String,
        required: true,
      },
      id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      country: {
        type: String,
        required: true,
      },
      dsc: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
});

const Menu = mongoose.model("Menu", menuSchema);

module.exports = Menu;
