const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
app.use(morgan("combined"));
const PORT = process.env.PORT || 8000;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use((req, res, next) => {
  console.log(`Hello from PORT ${PORT}`);
  // console.log(req.originalUrl);
  next();
});

// app.use((err, req, res, next) => {
//   const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
//   res.status(statusCode);
//   console.log(res.status(statusCode));
//   // Show stack trace if node environment is in development mode
//   res.json({
//     message: err.message,
//     stack: process.env.NODE_ENV === "production" ? null : err.stack,
//   });
// });

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
  // console.log(res.send(process.env.PAYPAL_CLIENT_ID));
});

require("./routes/products.routes")(app);
require("./routes/users.routes")(app);
require("./routes/orders.routes")(app);

app.use(notFound);
app.use(errorHandler);

dotenv.config();
// require("dotenv").config;
// console.log(process.env.PAYPAL_CLIENT_ID);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
