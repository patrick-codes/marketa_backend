const express = require("express");
const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");

;
const url = process.env.MONGO_URI;
module.exports = {
  dbconfig: asyncHandler(async (req, res, next) => {
    try {
      const connect = await mongoose.connect(url);
      console.log(
        "Database connected sucessfully to: ",
        connect.connection.host,
        connect.connection.name
      );
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }),
};
