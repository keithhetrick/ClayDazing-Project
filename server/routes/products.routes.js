const ProductsController = require("../controllers/products.controller");

module.exports = (app) => {
  app.post("/api/products", ProductsController.createProduct);
  app.post("/api/products/:id/reviews", ProductsController.createProductReview);
  app.get("/api/products", ProductsController.getProducts);
  app.get("/api/products/top", ProductsController.getTopProducts);
  app.get("/api/products/:id", ProductsController.getProductById);
  app.put("/api/products/:id", ProductsController.updateProduct);
  app.delete("/api/products/:id", ProductsController.deleteProduct);
};
