const Order = require("../models/orders.model");
const asyncHandler = require("express-async-handler");

//@desc  Create new order
//@route  POST /api/orders
//@access  Private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems === 0) {
    res.status(400);
    throw new Error("No order items");
  } else {
    const order = new Order({
      orderItems,
      // user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();

    res.status(201).json(createdOrder);
  }
});

//@desc  Get order by Id
//@route  GET /api/orders/:id
//@access  Private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

//@desc  Update order to paid
//@route  GET /api/orders/:id/pay
//@access  Private

const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    order.isPaid = true;
    order.paidAt = Date.now();
    order.paymentResult = {
      id: req.body.id,
      status: req.body.status,
      update_time: req.body.update_time,
      email_address: req.body.payer.email_address,
    };

    const updatedOrder = await order.save();

    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("Order not found");
  }
});

// @desc    Get logged in user orders
// @route   GET /api/orders/myorders
// @access  Private
const getMyOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
});

//@desc  Fetch single product
//@route  GET /api/products/:id
//@access  Public

// const getProductById = asyncHandler(async (req, res) => {
//   const product = await Products.findById(req.params.id);

//   if (product) {
//     res.json(product);
//   } else {
//     res.status(404);
//     throw new Error("Product not found");
//   }
// });

// const addProduct = (req, res) => {
//   Products.create(req.body)
//     .then((newProduct) => res.json(newProduct))
//     .catch((err) => res.status(400).json(err));
// };

// const editProduct = (req, res) => {
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

module.exports = {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
};
