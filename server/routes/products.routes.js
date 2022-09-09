const ProductsController = require("../controllers/products.controller");
const Product = require("../models/products.model");
const asyncHandler = require("express-async-handler");

module.exports = (app) => {
  app.post("/api/products", ProductsController.createProduct);
  app.get("/api/products", ProductsController.readAllProducts);
  app.get("/api/products/:id", ProductsController.findOneProduct);
  app.put("/api/products/:id", ProductsController.updateProduct);
  app.delete("/api/products/:id", ProductsController.deleteProduct);

  //@desc Fetch all products
  //@route GET /api/products
  //@access Public
  app.get(
    "/",
    asyncHandler(async (req, res) => {
      const products = await Product.find({});
      // res.status(401);
      // throw new Error("Not Authorized");
      res.json(products);
    })
  );

  //@desc Fetch single product
  //@route GET /api/products
  //@access Public
  app.get(
    "/:id",
    asyncHandler(async (req, res) => {
      const product = await Product.findById(req.params.id);
      if (product) {
        res.json(product);
      } else {
        res.status(404);
        throw new Error("Product not found");
      }
    })
  );

  // app.get("/", (req, res) => {
  //   res.send("API is running...");
  // });

  app.get("/api/products/", (req, res) => {
    res.json(products);
  });

  app.get("/api/products/:id", (req, res) => {
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
  });
};
