const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/products", ProductsController.addProduct);
  app.get("/api/products", ProductsController.getProducts);
  app.get("/api/products/:id", ProductsController.getProductById);
  app.put("/api/products/:id", ProductsController.editProduct);
  // app.delete("/api/products/:id", ProductsController.deleteProduct);
};
