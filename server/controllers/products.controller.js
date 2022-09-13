const Products = require("../models/products.model");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 2;
  const page = Number(req.query.pageNumber) || 1;
  const query = req.query.query
    ? {
        name: {
          $regex: req.query.query,
          $options: "i",
        },
      }
    : {};
  const products = await Products.find({ ...query });
  // res.status(401);
  // throw new Error("Not Authorized");
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    // res.status(404).json({ message: "Product not found" });
    res.status(404);
    // throw new Error("Product not found");
  }
});

const addProduct = asyncHandler(async (req, res) => {
  const product = await Products.create(req.body);
  if (product) {
    res.json(product);
  } else {
    res.data.err;
    res.status(400).json(err);
  }
});

const editProduct = (req, res) => {
  Products.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((editProduct) => {
      res.json(editProduct);
      console.log(editProduct);
    })
    .catch((err) => res.status(400).json(err));
};

const createProductReview = (req, res) => {
  Products.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((editProduct) => {
      res.json(editProduct);
      console.log(editProduct);
    })
    .catch((err) => res.status(400).json(err));
};

const getTopProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({}).sort({ rating: -1 }).limit(3);

  res.json(products);
});

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  createProductReview,
  getTopProducts,
};
