/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 15:14:04
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 15:53:35
 */
/*
 * @Descripttion: ZJJ Code
 * @version: 1.0.0
 * @Author: ZJJ
 * @Date: 2023-10-07 15:14:04
 * @LastEditors: ZJJ
 * @LastEditTime: 2023-10-07 15:20:09
 */
import asyncHandler from "../middleware/asyncHandler.js";
import User from "../models/userModel.js";

// @desc Auth user & get token
// @route POST /api/users/login
// @access Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email: email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    //unauthorized
    res.status(401);
    throw new Error("Invalid email or password");
  }
});

// @desc Register user
// @route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
  res.json("register user");
});

// @desc Logout user / clear cookies
// @route POST /api/users/logout
// @access Private
const logoutrUser = asyncHandler(async (req, res) => {
  res.json("logout user");
});

// @desc Get user profile
// @route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json("get user profile");
});

// @desc update user profile
// @route PUT /api/users/profile
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.json("update user profile");
});

// @desc get users
// @route PUT /api/users
// @access Private/Admin
const getUsers = asyncHandler(async (req, res) => {
  res.json("get users");
});

// @desc get user by id
// @route PUT /api/users/:id
// @access Private/Admin
const getUserById = asyncHandler(async (req, res) => {
  res.json("get user by id");
});

// @desc delete users
// @route DELTE /api/users/:id
// @access Private/Admin
const deleteUser = asyncHandler(async (req, res) => {
  res.json("delete users");
});

// @desc update users
// @route PUT /api/users/:id
// @access Private/Admin
const updateUser = asyncHandler(async (req, res) => {
  res.json("update user");
});

export {
  authUser,
  registerUser,
  logoutrUser,
  getUserProfile,
  updateUserProfile,
  getUsers,
  getUserById,
  deleteUser,
  updateUser,
};
