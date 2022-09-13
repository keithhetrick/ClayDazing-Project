const Users = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const generateToken = require("../utils/generateToken");
const protect = require("../middleware/authMiddleware");
// const bcrypt = require("bcryptjs");

const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find({});
  res.json(users);
});

const addUsers = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await Users.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await Users.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      // token: null,
      // token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

const updateUser = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.isAdmin = req.body.isAdmin;
    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      isAdmin: updatedUser.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id).select("-password");
  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const deleteUser = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    await user.remove();
    res.json({ message: "User removed" });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

const authUsers = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // res.send({
  //   email,
  //   password,
  // });

  const user = await Users.findOne({ email });
  // const isMatch = await bcrypt.compare(password, user.password);

  // if (user && isMatch) {
  if (user) {
    // if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    // err;
    res.status(401);
    // throw new Error("Invalid email or password");
    throw new Error("Invalid email or password");
    // console.log(err);
  }
});

const getUserProfile = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

module.exports = {
  getUsers,
  addUsers,
  getUserById,
  updateUser,
  deleteUser,
  authUsers,
  getUserProfile,
};
