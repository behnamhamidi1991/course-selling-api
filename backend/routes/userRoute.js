const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const {
  registerUser,
  deleteUser,
  getUsers,
  updateUser,
  loginUser,
  getMe,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.get("/me", protect, getMe);
router.post("/login", loginUser);
router.post("/", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
