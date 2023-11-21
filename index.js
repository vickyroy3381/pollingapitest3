const express = require("express");
const app = express();
const port = 3000;
require("dotenv").config();
//Accessing Database
const db = require("./config/mongoose");

app.use(express.urlencoded({ extended: true }));

// Accessing Routes
app.use("/", require("./routes/index"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server: ${err}`);
  }
  console.log(`Server is Running Perfectly: ${port}`);
});
