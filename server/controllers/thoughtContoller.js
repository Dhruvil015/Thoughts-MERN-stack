const httpStatus = require("http-status");
const Thought = require("../models/Thought");
const ApiError = require("../utils/ApiError");
const catchAsync = require("../utils/catchAsync");

const getThoughts = catchAsync(async (req, res, next) => {
  const thoughts = await Thought.find();
  res.status(httpStatus.OK).json({
    success: true,
    message: thoughts,
  });
});

const createThought = catchAsync(async (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "please provide all the information!!",
    });
  }
  const thought = await Thought.create({
    title: title,
    description: description,
  });
  res.status(httpStatus.CREATED).json({
    success: true,
    message: "Thought successfully added.",
  });
});

const updateThought = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const { title, description } = req.body;
  if (!id) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "please provide id to edit.",
    });
  }
  const thoughtId = await Thought.find({ _id: id });
  if (thoughtId <= 0) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: `thought with id - ${id} not found.`,
    });
  }
  if (!title || !description) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "please provide all the information!!",
    });
  }
  const thought = await Thought.updateOne(
    { _id: id },
    { $set: { title: title, description: description } }
  );
  res.status(httpStatus.OK).json({
    success: true,
    message: "Thought successfully updated.",
  });
});

const deleteThought = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  if (!id) {
    return res.status(httpStatus.BAD_REQUEST).json({
      success: false,
      message: "please provide id.",
    });
  }
  const thoughtId = await Thought.find({ _id: id });
  if (thoughtId <= 0) {
    return res.status(httpStatus.NOT_FOUND).json({
      success: false,
      message: `thought with id - ${id} not found.`,
    });
  }
  const thought = await Thought.deleteOne({ _id: id });
  res.status(httpStatus.OK).json({
    success: true,
    message: await Thought.find(),
  });
});

module.exports = {
  getThoughts,
  createThought,
  updateThought,
  deleteThought,
};
