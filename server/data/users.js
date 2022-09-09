const bcrypt = require("bcryptjs");

const user = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Dow",
    email: "jane@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

module.exports = users;
