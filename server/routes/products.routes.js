const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/products", ProductsController.createProduct);
  app.get("/api/products", ProductsController.readAllProducts);
  app.get("/api/products/:id", ProductsController.findOneProduct);
  app.put("/api/products/:id", ProductsController.updateProduct);
  app.delete("/api/products/:id", ProductsController.deleteProduct);
};
