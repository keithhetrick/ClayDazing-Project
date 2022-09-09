const Users = require("../models/users.model");

addUser = (req, res) => {
  console.log(body);
  Users.create(req.body)
    .then((newUser) => res.json(newUser))
    .catch((err) => res.status(400).json(err));
};

readAllUsers = (req, res) => {
  Users.find()
    .then((allUsers) => res.json(allUsers))
    .catch((err) => res.status(400).json(err));
};

deleteUser = (req, res) => {
  Users.deleteOne({ _id: req.params.id })
    .then((deletedUser) => {
      res.json(deletedUser);
      console.log(deletedUser);
    })
    .catch((err) => err.status(400).json(err));
};

updatePlayer = (req, res) => {
  Player.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updatedPlayer) => {
      res.json(updatedPlayer);
      console.log(updatedPlayer);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  addUser,
  findAllUsers,
  deleteUser,
  updateUser,
};
