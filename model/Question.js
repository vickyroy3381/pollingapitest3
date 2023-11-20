const mongoose = require("mongoose");

//Creating a new schema for the question and taking the reference for the options
const questionSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  options: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "option",
    },
  ],
});

const Question = mongoose.model("question", questionSchema);

module.exports = Question;
