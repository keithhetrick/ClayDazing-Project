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
// const { protect } = require("./middleware/authMiddleware");

app.use((req, res, next) => {
  console.log(`Hello from PORT ${PORT}`);
  // console.log(req.originalUrl);
  next();
});

app.get("/api/config/paypal", (req, res) => {
  res.send(process.env.PAYPAL_CLIENT_ID);
  // console.log(res.send(process.env.PAYPAL_CLIENT_ID));
});

require("./routes/products.routes")(app);
require("./routes/users.routes")(app);
require("./routes/orders.routes")(app);

// app.use(protect);
app.use(notFound);
app.use(errorHandler);

dotenv.config();
// console.log(process.env.PAYPAL_CLIENT_ID);

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
