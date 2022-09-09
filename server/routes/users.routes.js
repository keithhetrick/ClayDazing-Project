const UsersController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/users", UsersController.createProduct);
  app.get("/api/users", UsersController.readAllusers);
  app.get("/api/users/:id", UsersController.findOneProduct);
  app.put("/api/users/:id", UsersController.updateProduct);
  app.delete("/api/users/:id", UsersController.deleteProduct);
};
