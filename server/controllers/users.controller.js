const Users = require("../models/users.model");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");

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

module.exports = { getUsers, addUsers, getUserById, editUser, deleteUser };
