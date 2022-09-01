const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [3, "Name must be 3 characters or longer."],
      unique: true,
      uniqueCaseInsensitive: true,
    },
    price: {
      type: Number,
      required: [true, "Price is required!"],
    },
    description: {
      type: String,
      required: [true, "Description is required!"],
      minlength: [3, "Description must be 3 characters or longer."],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
