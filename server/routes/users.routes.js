const UsersController = require("../controllers/users.controller");

module.exports = (app) => {
  // app.post("/api/users/login", UsersController.authUsers);
  // app.get("/api/users/login", UsersController.authUsers);
  app.get("/api/users/login", UsersController.getUsers);
  app.post("/api/users", UsersController.addUsers);
  app.get("/api/users/:id", UsersController.getUserById);
  app.put("/api/users/profile/:id", UsersController.editUser);
  app.delete("/api/users/login/:id", UsersController.deleteUser);
};
