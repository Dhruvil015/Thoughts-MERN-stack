const mongoose = require("mongoose");

const thoughtSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      unique: false,
      required: true,
    },
    description: {
      type: String,
      unique: false,
      required: true,
    },
  },
  { timestamps: true }
);

const Thought = mongoose.model("Thought", thoughtSchema);

module.exports = Thought;
