const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  createCourse,
  getCourses,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");

const router = express.Router();

router.get("/", getCourses);
router.post("/", protect, createCourse);
router.delete("/:id", protect, deleteCourse);
router.put("/:id", protect, updateCourse);

module.exports = router;
