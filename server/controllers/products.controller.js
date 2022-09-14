const Products = require("../models/products.model");
const asyncHandler = require("express-async-handler");

const getProducts = asyncHandler(async (req, res) => {
  // const pageSize = 2;
  // const page = Number(req.query.pageNumber) || 1;
  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: "i",
        },
      }
    : {};
  const products = await Products.find({ ...keyword });
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

// const createProduct = asyncHandler(async (req, res) => {
//   const product = await Products.create(req.body);
//   if (product) {
//     res.json(product);
//   } else {
//     res.data.err;
//     res.status(400).json(err);
//   }
// });

const createProduct = asyncHandler(async (req, res) => {
  const product = new Products({
    name: "Sample name",
    price: 0,
    // user: req.user._id,
    image: "/images/sample.jpg",
    brand: "Sample brand",
    category: "Sample category",
    countInStock: 0,
    numReviews: 0,
    description: "Sample description",
  });
  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

// const updateProduct = (req, res) => {
//   Products.updateOne({ _id: req.params.id }, req.body, {
//     new: true,
//     runValidators: true,
//   })
//     .then((editProduct) => {
//       res.json(editProduct);
//       console.log(editProduct);
//     })
//     .catch((err) => res.status(400).json(err));
// };

const updateProduct = asyncHandler(async (req, res) => {
  const { name, price, description, image, brand, category, countInStock } =
    req.body;

  const product = await Products.findById(req.params.id);

  if (product) {
    product.name = name;
    product.price = price;
    product.description = description;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  } else {
    res.status(404);
    throw new Error("Product not found");
  }
});

const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Products.findById(req.params.id);
  if (product) {
    await product.deleteOne();
    res.json({ message: "Product removed" });
  } else {
    res.data.err;
    res.status(400).json(err);
  }
});

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
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  deleteProduct,
};
