import User from "../models/UserModel.js";
import generateToken from "../utils/generateToken.js";
import asyncHandler from "express-async-handler";

// @desc    Register a new user
// @route   POST / api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(400);
    throw new Error("User already exists");
  }
  const newUser = await User.create({
    name,
    email,
    password,
  });
  if (newUser) {
    generateToken(res, newUser._id);
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc    Auth user / set token
// @route   POST / api/users/auth
// @access  Public
export const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged in" });
});

// @desc    Logout user
// @route   POST / api/users/logout
// @access  Public
export const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User logged out" });
});

// @desc    Get User Profile
// @route   GET / api/users/profile
// @access  Private
export const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User Profile" });
});

// @desc    Update user profile
// @route   PUT / api/users/profile
// @access  Private
export const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile updated" });
});
