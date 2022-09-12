const OrdersController = require("../controllers/orders.controller");

module.exports = (app) => {
  // app.post("/api/users/login", OrdersController.authUsers);
  // app.get("/api/users/login", OrdersController.authUsers);
  // app.get("/api/orders/", OrdersController.getUsers);
  app.post("/api/orders", OrdersController.addOrderItems);
  app.get("/api/orders/:id", OrdersController.getOrderById);
  app.get("/api/orders/myorders", OrdersController.getMyOrders);
  app.put("/api/orders/:id/pay", OrdersController.updateOrderToPaid);
  // app.put("/api/orders/profile/:id", OrdersController.editUser);
  // app.delete("/api/orders/login/:id", OrdersController.deleteUser);
};
