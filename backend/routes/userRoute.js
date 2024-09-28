const express = require("express");
const {
  registerUser,
  deleteUser,
  getUsers,
  updateUser,
} = require("../controllers/userController");

const router = express.Router();

router.get("/", getUsers);
router.post("/", registerUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;
