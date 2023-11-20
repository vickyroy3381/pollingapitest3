const mongoose = require("mongoose");

//Creating option schema which have the text, votes and link for the vote
const optionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  votes: {
    type: Number,
    default: 0,
  },
  link_to_vote: {
    type: String,
  },
});

const Option = mongoose.model("option", optionSchema);

module.exports = Option;
