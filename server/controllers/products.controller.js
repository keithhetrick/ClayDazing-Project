const Products = require("../models/products.model");

const name_error = {
  errors: {
    name: {
      message: "Name must be unique, try other name.",
    },
  },
};

readAllProducts = (req, res) => {
  Products.find()
    .then((allProducts) => res.json(allProducts))
    .catch((err) => res.status(400).json(err));
};

createProduct = (req, res) => {
  const product = req.body;
  checkName(product.name)
    .then((isNameUnique) => {
      if (isNameUnique) return Product.create(product);
      throw name_error;
    })
    .then((result) => res.json(result))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
};

const checkName = (name) => {
  return Products.find({ name }).then((candidates) => candidates.length === 0);
};

findOneProduct = (req, res) => {
  Products.findOne({ _id: req.params.id })
    .then((foundProduct) => {
      console.log(foundProduct);
      res.json(foundProduct);
    })
    .catch((err) => res.status(400).json(err));
};

updateProduct = (req, res) => {
  const product = req.body;
  checkName(product.name)
    .then((isNameUnique) => {
      if (isNameUnique || true)
        return Products.findOneAndUpdate({ _id: req.params.id }, req.body, {
          new: true,
          runValidators: true,
        });
      throw name_error;
    })
    .then((editProduct) => {
      res.json(editProduct);
      console.log(editProduct);
    })
    .catch((err) => res.status(400).json(err));
};

deleteProduct = (req, res) => {
  Products.deleteOne({ _id: req.params.id })
    .then((deleteProduct) => {
      console.log(deleteProduct);
      this.readAllProducts(req, res);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = {
  readAllProducts,
  createProduct,
  findOneProduct,
  updateProduct,
  deleteProduct,
};
