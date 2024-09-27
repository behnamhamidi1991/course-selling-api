const asyncHandler = require("express-async-handler");

const Course = require("../models/courseModel");

// @desc Get all courses
// route GET /api/courses
// @access Public
const getCourses = asyncHandler(async (req, res) => {
  const courses = await Course.find({});

  res.status(200).json(courses);
});

// @desc Create a course
// route POST /api/courses
// @access Private
const createCourse = asyncHandler(async (req, res) => {
  const { title, description, studentsNum, category } = req.body;

  if (!title || !description || !studentsNum || !category) {
    res.status(400);
    throw new Error("Please write into required fields");
  }

  const course = await Course.create({
    title: req.body.title,
    description: req.body.description,
    studentsNum: req.body.studentsNum,
    category: req.body.category,
  });

  res.status(201).json(course);
});

module.exports = {
  createCourse,
  getCourses,
};
