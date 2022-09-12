const Products = require("../models/products.model");
const asyncHandler = require("express-async-handler");

//@desc  Fetch all products
//@route  GET /api/products
//@access  Public
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

//@desc  Fetch single product
//@route  GET /api/products/:id
//@access  Public
const getProductById = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const addProduct = (req, res) => {
  Products.create(req.body)
    .then((newProduct) => res.json(newProduct))
    .catch((err) => res.status(400).json(err));
};

const editProduct = (req, res) => {
  Products.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    // runValidators: true,
  })
    .then((editProduct) => {
      res.json(editProduct);
      console.log(editProduct);
    })
    .catch((err) => res.status(400).json(err));
};

//@desc  Create new review
//@route  POST /api/products/:id/reviews
//@access  Private
const createProductReview = (req, res) => {
  Products.updateOne({ _id: req.params.id }, req.body, {
    new: true,
    // runValidators: true,
  })
    .then((editProduct) => {
      res.json(editProduct);
      console.log(editProduct);
    })
    .catch((err) => res.status(400).json(err));
};

//@desc  Get top rated products
//@route  GET /api/products/top
//@access  Public
// const createProductReview = (req, res) => {
//   Products.updateOne({ _id: req.params.id }, req.body, {
//     new: true,
//     // runValidators: true,
//   })
//     .then((editProduct) => {
//       res.json(editProduct);
//       console.log(editProduct);
//     })
//     .catch((err) => res.status(400).json(err));
// };

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
