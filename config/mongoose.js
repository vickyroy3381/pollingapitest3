//require the library
const mongoose = require("mongoose");
require("dotenv").config();

const mongodbUrl = process.env.MONGODB_URL;

//connect to the database
mongoose.connect(mongodbUrl);

const db = mongoose.connection;

//error function
db.on("error", function (err) {
  console.log(err.message);
});

//if database is connected successfully,then print the message
db.once("open", function () {
  console.log("Successfully connected to the database");
});

module.exports = db;
