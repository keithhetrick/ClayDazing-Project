const express = require("express");
const app = express();
const cors = require("cors");
const products = require("./data/products");
const PORT = process.env.PORT || 8000;
const dotenv = require("dotenv");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// const productsRoutes = require("./routes/products.routes");

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use("/api/products", productsRoutes);

app.use((req, res, next) => {
  console.log("Hello");
  next();
});

// require("./config/mongoose.config");
// require("./routes/products.routes")(app);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.get("/api/products/", (req, res) => {
  res.json(products);
});

app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
