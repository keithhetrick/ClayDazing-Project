const UsersController = require("../controllers/users.controller");
const authMiddleware = require("../middleware/authMiddleware");

module.exports = (app) => {
  app.post("/api/users/login", UsersController.authUsers);
  app.get("/api/users/profile", UsersController.getUserProfile);
  // app.get("/api/users/profile", UsersController.getUserProfile);
  // app.get("/api/users/login", UsersController.authUsers);
  app.get("/api/users", UsersController.getUsers);
  app.post("/api/users/login", UsersController.addUsers);
  app.get("/api/users/:id", UsersController.getUserById);
  app.put("/api/users/profile/:id", UsersController.editUser);
  app.delete("/api/users/login/:id", UsersController.deleteUser);
  // app.delete("/api/users/admin/:id", UsersController.adminDeleteUser);
};
