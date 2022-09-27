const UsersController = require("../controllers/users.controller");
// const authMiddleware = require("../middleware/authMiddleware");

module.exports = (app) => {
  // THIS IS THE PROBLEM LINE
  app.get("/api/users/profile/:id", UsersController.getUserProfile);

  app.post("/api/users/login", UsersController.authUsers);
  app.get("/api/users", UsersController.getUsers);
  app.post("/api/users", UsersController.addUsers);
  app.get("/api/users/:id", UsersController.getUserById);
  app.put("/api/users/profile/:id", UsersController.updateUser);
  app.delete("/api/users/:id", UsersController.deleteUser);
};
