const Users = require("../models/users.model");
const asyncHandler = require("express-async-handler");
// const bcrypt = require("bcryptjs");

//@desc  Auth user & get token
//@route  POST /api/users/login
//@access  Public

// const findAllUsers = (req, res) => {
//   Users.find()
//     .then((allUsers) => res.json(allUsers))
//     .catch((err) => res.json(err));
// };

const getUsers = asyncHandler(async (req, res) => {
  const users = await Users.find({});
  // res.status(401);
  // throw new Error("Not Authorized");
  res.json(users);
});

const addUsers = (req, res) => {
  Users.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.status(400).json(err));
};

const editUser = (req, res) => {
  Users.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((editUser) => {
      res.json(editUser);
      console.log(editUser);
    })
    .catch((err) => res.status(400).json(err));
};

const getUserById = asyncHandler(async (req, res) => {
  const user = await Users.findById(req.params.id);

  if (user) {
    res.json(user);
  } else {
    res.status(404);
    throw new Error("User not found");
  }
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
// const getUserById = asyncHandler(async (req, res) => {
//   const user = await Users.findById(req.user._id);

//   if (user) {
//     user.name = req.body.name || user.name;
//     user.email = req.body.email || user.email;
//     if (req.body.password) {
//       user.password = req.body.password;
//     }

//     const updatedUser = await user.save();

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: null,
//       // token: generateToken(updatedUser._id),
//     });
//   } else {
//     res.status(404);
//     throw new Error("User not found");
//   }
// });

const deleteUser = (req, res) => {
  Users.deleteOne({ _id: req.params.id })
    .then((deleteUser) => {
      res.json(deleteUser);
      console.log(deleteUser);
    })
    .catch((err) => res.status(400).json(err));
};

// const authUsers = asyncHandler(async (req, res) => {
//   const { email, password } = req.body;

//   const user = await Users.findOne({ email });
//   const isMatch = await bcrypt.compare(password, user.password);

//   if (user && isMatch) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: null,
//       // token: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid email or password");
//   }
// });

module.exports = {
  getUsers,
  addUsers,
  getUserById,
  editUser,
  deleteUser,
};

// const authUser = asyncHandler(async (req, res) => {
//   const { email, password } = req.body

//   const user = await User.findOne({ email })

//   if (user && (await user.matchPassword(password))) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(401)
//     throw new Error('Invalid email or password')
//   }
// })

// // @desc    Register a new user
// // @route   POST /api/users
// // @access  Public
// const registerUser = asyncHandler(async (req, res) => {
//   const { name, email, password } = req.body

//   const userExists = await User.findOne({ email })

//   if (userExists) {
//     res.status(400)
//     throw new Error('User already exists')
//   }

//   const user = await User.create({
//     name,
//     email,
//     password,
//   })

//   if (user) {
//     res.status(201).json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//       token: generateToken(user._id),
//     })
//   } else {
//     res.status(400)
//     throw new Error('Invalid user data')
//   }
// })

// // @desc    Get user profile
// // @route   GET /api/users/profile
// // @access  Private
// const getUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     res.json({
//       _id: user._id,
//       name: user.name,
//       email: user.email,
//       isAdmin: user.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Update user profile
// // @route   PUT /api/users/profile
// // @access  Private
// const updateUserProfile = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.user._id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     if (req.body.password) {
//       user.password = req.body.password
//     }

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//       token: generateToken(updatedUser._id),
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Get all users
// // @route   GET /api/users
// // @access  Private/Admin
// const getUsers = asyncHandler(async (req, res) => {
//   const users = await User.find({})
//   res.json(users)
// })

// // @desc    Delete user
// // @route   DELETE /api/users/:id
// // @access  Private/Admin
// const deleteUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     await user.remove()
//     res.json({ message: 'User removed' })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Get user by ID
// // @route   GET /api/users/:id
// // @access  Private/Admin
// const getUserById = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id).select('-password')

//   if (user) {
//     res.json(user)
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// // @desc    Update user
// // @route   PUT /api/users/:id
// // @access  Private/Admin
// const updateUser = asyncHandler(async (req, res) => {
//   const user = await User.findById(req.params.id)

//   if (user) {
//     user.name = req.body.name || user.name
//     user.email = req.body.email || user.email
//     user.isAdmin = req.body.isAdmin

//     const updatedUser = await user.save()

//     res.json({
//       _id: updatedUser._id,
//       name: updatedUser.name,
//       email: updatedUser.email,
//       isAdmin: updatedUser.isAdmin,
//     })
//   } else {
//     res.status(404)
//     throw new Error('User not found')
//   }
// })

// export {
//   authUser,
//   registerUser,
//   getUserProfile,
//   updateUserProfile,
//   getUsers,
//   deleteUser,
//   getUserById,
//   updateUser,
// }
