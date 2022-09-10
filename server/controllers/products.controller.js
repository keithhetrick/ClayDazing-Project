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

module.exports = {
  getProducts,
  getProductById,
};

// readAllProducts = (req, res) => {
//   Products.find()
//     .then((allProducts) => res.json(allProducts))
//     .catch((err) => res.status(400).json(err));
// };

// createProduct = (req, res) => {
//   const product = req.body;
//   checkName(product.name)
//     .then((isNameUnique) => {
//       if (isNameUnique) return Products.create(product);
//       throw name_error;
//     })
//     .then((result) => res.json(result))
//     .catch((err) => {
//       console.log(err);
//       res.status(400).json(err);
//     });
// };

// findOneProduct = (req, res) => {
//   Products.findOne({ _id: req.params.id })
//     .then((foundProduct) => {
//       console.log(foundProduct);
//       res.json(foundProduct);
//     })
//     .catch((err) => res.status(400).json(err));
// };

// updateProduct = (req, res) => {
//   const product = req.body;
//   checkName(product.name)
//     .then((isNameUnique) => {
//       if (isNameUnique || true)
//         return Products.findOneAndUpdate({ _id: req.params.id }, req.body, {
//           new: true,
//           runValidators: true,
//         });
//     })
//     .then((editProduct) => {
//       res.json(editProduct);
//       console.log(editProduct);
//     })
//     .catch((err) => res.status(400).json(err));
// };

// deleteProduct = (req, res) => {
//   Products.deleteOne({ _id: req.params.id })
//     .then((deleteProduct) => {
//       console.log(deleteProduct);
//       this.readAllProducts(req, res);
//     })
//     .catch((err) => res.status(400).json(err));
// };

// module.exports = {
//   readAllProducts,
//   createProduct,
//   findOneProduct,
//   updateProduct,
//   deleteProduct,
// };
