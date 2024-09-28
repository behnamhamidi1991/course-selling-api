const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

// @desc    Register new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Fill in all required fields");
  }

  // Check if user already exists
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists!");
  }

  // Hash the password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data!");
  }
});

// Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
  expiresIn: "30d";
};

// @desc    Register new user
// @route   POST /api/users/:id
// @access  Admin Privilage
const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  // Check if user exists
  if (!user) {
    res.status(400);
    throw new Error("User does not exist");
  }

  res.status(200).json(user);
});

// @desc    Get all users
// @route   GET api/users
// @access  Admin Privilage
const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});

  if (users.length === 0) {
    return res.status(404).json({ message: "There are no users!" });
  }

  res.status(200).json(users);
});

// @desc    Update user
// @route   PUT api/users
// @access  Private
const updateUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  // Check if user exists
  if (!user) {
    res.status(404);
    throw new Error("User not found");
  }

  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedUser);
});

module.exports = {
  registerUser,
  getUsers,
  deleteUser,
  updateUser,
};
