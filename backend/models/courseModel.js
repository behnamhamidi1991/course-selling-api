const mongoose = require("mongoose");
const { type } = require("os");

const CourseSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    title: {
      type: String,
      required: [true, "Please add the title"],
    },
    description: {
      type: String,
      required: [true, "Please describe the course"],
    },
    studentsNum: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: false,
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Course", CourseSchema);
