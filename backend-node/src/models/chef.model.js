const mongoose = require("mongoose");

const chefSchema = new mongoose.Schema({
  img: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
});

const Chef = mongoose.model("Chef", chefSchema);

module.exports = Chef;
