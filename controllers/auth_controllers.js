require("dotenv").config();
const asyncHandler = require("express-async-handler");
const user = require("../models/auth_model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { request } = require("express");

module.exports = {
  userSignup: asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({ message: "Fields cannot be empty." });
      throw new Error("Fields cannot be empty.");
    }

    const userExist = await user.findOne({ email });
    if (userExist) {
      res.status(400).json({ message: "User With Same Email Already Exist" });
      throw new Error("User With Same Email Already Exist");
    }

    const hashedPassword = await bcrypt.hash(password, 8);
    const newUser = await user.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    if (newUser) {
      res.status(200).json({ message: "User Registered Sucessfully.." });
    } else {
      res.status(400).json({ message: "Details Not Valid." });
      throw new Error("Details Not Valid.");
    }

    // if (newUser) {
    //   res.status(201).json({
    //     _id: newUser._id,
    //     email: newUser.email,
    //     message: "Signup Sucessfull",
    //   });
    // } else {
    //   res.status(400).json({message:'Details Not Valid.'});
    //   throw new Error("Details Not Valid.");
    // }
  }),

  userLogin: asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: "Fields Cannot Be Empty." });
      throw new Error("Fields Cannot Be Empty.");
    }

    const userlogged = await user.findOne({ email });
    const comparePassword = await bcrypt.compare(password, userlogged.password);
    if (userlogged && comparePassword) {
      const accessToken = jwt.sign(
        {
          id: user.id,
          username: user.username,
          email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: "30d" }
      );

      res
        .status(200)
        .json({
          message: "User Logged in Sucessfully..",
          userId:userlogged.id,
          accessToken,
          user: userlogged.username,
          userMail: userlogged.email,


        });
    } else {
      res.status(401).json({ message: "Email or Password not valid" });
      throw new Error("Email or Password not valid");
    }
  }),
};
