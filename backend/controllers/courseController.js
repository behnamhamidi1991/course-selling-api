const asyncHandler = require("express-async-handler");

const Course = require("../models/courseModel");
const User = require("../controllers/userController");

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
    user: req.user.id,
    title: req.body.title,
    description: req.body.description,
    studentsNum: req.body.studentsNum,
    category: req.body.category,
  });

  res.status(201).json(course);
});

// @desc Update a course
// route PUT /api/courses/:id
// @access Private
const updateCourse = asyncHandler(async (req, res) => {
  const course = await Course.findById(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Course does not exist!");
  }

  const updatedCourse = await Course.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  res.status(200).json(updatedCourse);
});

// @desc Delete a course
// route DELETE /api/courses/:id
// @access Private
const deleteCourse = asyncHandler(async (req, res) => {
  const course = await Course.findByIdAndDelete(req.params.id);

  if (!course) {
    res.status(400);
    throw new Error("Course does not exist!");
  }

  res.status(200).json(course);
});

module.exports = {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
};
