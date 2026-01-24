// app.js
require('dotenv').config()

const express = require("express");
const app = express();

const usersRouter = require("./routes/usersRouter");

const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use("/", usersRouter);

app.listen(port, (error) => {
  if (error) {
    throw error;
  }

  console.log(`listening on port ${port}!`);
});