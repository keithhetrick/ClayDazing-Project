const mongoose = require("mongoose");

const connectDB = mongoose
  .connect("mongodb://localhost/clay-dazing", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Established a connection to the database"))
  .catch((err) =>
    console.log("Something went wrong when connecting to the database", err)
  );

module.exports = connectDB;
