// const UsersController = require("../controllers/products.controller");
const { authUser } = require("../controllers/users.controller");

module.exports = (app) => {
  app.post("/api/users/login", authUser);
  app.get("/api/users/login", authUser);
  // app.get("/api/products", ProductsController.getProducts);
  // app.get("/api/products/:id", ProductsController.getProductById);
  // app.put("/api/users/:id", UsersController.updateProduct);
  // app.delete("/api/users/:id", UsersController.deleteProduct);
};
