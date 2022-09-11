const UsersController = require("../controllers/users.controller");

module.exports = (app) => {
  // app.post("/api/users/login", UsersController.authUsers);
  // app.get("/api/users/login", UsersController.authUsers);
  app.get("/api/users/login", UsersController.getUsers);
  app.get("/api/users/login/:id", UsersController.getUserById);
  app.post("/api/users/login", UsersController.addUsers);
  app.put("/api/users/login/:id", UsersController.editUser);
  app.delete("/api/users/login/:id", UsersController.deleteUser);
};
