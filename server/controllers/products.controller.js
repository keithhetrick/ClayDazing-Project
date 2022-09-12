const Products = require("../models/products.model");
const asyncHandler = require("express-async-handler");

//@desc  Fetch all products
//@route  GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Products.find({});
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

// const createProductReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body;
//   const product = await Products.findById(req.params.id);

//   if (product) {
//     const alreadyReviewed = product.reviews.find(
//       (review) => review.user.toString() === req.user._id.toString()
//     );

//     if (alreadyReviewed) {
//       res.status(400);
//       throw new Error("Product already reviewed");
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     };

//     product.reviews.push(review);

//     product.numReviews = product.reviews.length;

//     product.rating =
//       product.reviews.reduce(
//         (accumulator, item) => item.rating + accumulator,
//         0
//       ) / product.reviews.length;

//     await product.save();
//     res.status(201).json({ message: "Review added" });
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

module.exports = {
  getProducts,
  getProductById,
  addProduct,
  editProduct,
  createProductReview,
};
