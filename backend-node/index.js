const express = require("express");
const connection = require("./config.db");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3333;
const menuRouter = require("./src/routes/menu.route");
const testimonialRouter = require("./src/routes/testimonial.route");
const chefRouter = require("./src/routes/chef.route");
const blogRouter = require("./src/routes/blog.route");
const userRouter = require("./src/routes/user.route");

app.use(cors());
app.use(express.json());
app.use("/api/menu", menuRouter);
app.use("/api/testimonial", testimonialRouter);
app.use("/api/chef", chefRouter);
app.use("/api/blog", blogRouter);
app.use("/api/user", userRouter);

connection(process.env.CONNECTION_STRING)
  .then(console.log("connecting"))
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
