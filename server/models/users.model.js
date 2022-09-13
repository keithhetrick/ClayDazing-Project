const mongoose = require("mongoose");
// const bcrypt = require("bcryptjs");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required!"],
      minlength: [3, "Name must be 3 characters or longer."],
    },
    email: {
      type: String,
      required: [true, "Email is required!"],
      minlength: [3, "Description must be 3 characters or longer."],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [3, "Password must be 3 characters or longer."],
    },
    confirmPassword: {
      type: String,
      required: [true, "Password is required!"],
      minlength: [3, "Password must be 3 characters or longer."],
    },
    isAdmin: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  { timestamps: true }
);

// userSchema.methods.matchPassword = async function (enteredPassword) {
//   return await bcrypt.compare(enteredPassword, this.password);
// };

const Users = mongoose.model("Users", userSchema);

module.exports = Users;
