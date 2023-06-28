const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
const bcrypt = require("bcrypt");
// @desc register users
// @route POST api/users/register
// @access public

const registerUsers = asyncHandler(async (req, res) => {
  const { userName, email, password } = req.body;
  if (!userName || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const userAvailable = await User.findOne({ email });
  if (userAvailable) {
    res.status(400);
    throw new Error("User already registered!");
  }
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await User.create({
    userName,
    email,
    password: hashedPassword,
  });
  console.log(`User created ${user}`);
  if (user) {
    res.status(201).json({ _id: user.id, email: user.email });
  } else {
    res.status(400);
    throw new Error("User data is not valid");
  }
  res.json({ message: "Register the user" });
});

// @desc login user
// @route POST api/users/login
// @access public

const loginUser = asyncHandler(async (req, res) => {
  res.json({ message: "Login  user" });
});

// @desc current user info
// @route GET api/users/current
// @access private

const currentUser = asyncHandler(async (req, res) => {
  res.json({ message: "Current user information" });
});
module.exports = { registerUsers, loginUser, currentUser };