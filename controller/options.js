const Option = require("../model/Option");
const Question = require("../model/Question");

//To create Options for the questions usign Questions ID
module.exports.createOptions = async (req, res) => {
  try {
    const { text } = req.body;

    const option = await Option.create({
      text,
    });

    option.link_to_vote = `https://navjot-pollapi.onrender.com/options/${option._id}/add_vote`;
    option.save();

    const { id } = req.params;
    const question = await Question.findById(id);
    question.options.push(option._id);
    question.save();
    return res.status(200).json({
      message: "Options Created Successfully",
      data: {
        option,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {
        error,
      },
    });
  }
};

//Add Vote
module.exports.addVote = async (req, res) => {
  try {
    const { id } = req.params;
    const option = await Option.findById(id);
    option.votes = option.votes + 1;
    option.save();
    return res.status(200).json({
      message: "Successfully Voted",
      data: {
        option,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {
        error,
      },
    });
  }
};

//Delete Options
module.exports.deleteOption = async (req, res) => {
  try {
    const { id } = req.params;
    let option = await Option.findById(id);
    if (option.votes === 0) {
      await option.deleteOne({ _id: id });
      return res.status(200).json({
        message: "Option Deleted Successfully",
        data: {
          deletedOption: option,
        },
      });
    }
    return res.status(200).json({
      message: "Can't be Deleted because it has Votes",
      data: {
        option,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Something Went Wrong",
      data: {
        error,
      },
    });
  }
};
