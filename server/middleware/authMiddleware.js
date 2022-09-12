const jwt = require("jsonwebtoken");
const Users = require("../models/users.model");
const asyncHandler = require("express-async-handler");

const protect = asyncHandler(async (req, res, next) => {
  let token;
  console.log(req.headers.authorization);

  next();
});

module.export = { protect };
