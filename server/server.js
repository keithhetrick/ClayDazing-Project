const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
const PORT = process.env.PORT || 8000;
require("./config/mongoose.config");
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
// const { notFound, errorHandler } = require("./middleware/errorMiddleware");

app.use((req, res, next) => {
  console.log(`Hello from PORT ${PORT} `);
  next();
});

// app.use(notFound);
// app.use(errorHandler);

require("./routes/products.routes")(app);
require("./routes/users.routes")(app);

dotenv.config();

app.listen(PORT, () =>
  console.log(`Server is running in ${process.env.NODE_ENV} on PORT ${PORT}`)
);
