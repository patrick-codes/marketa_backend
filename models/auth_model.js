const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please enter a username"],
    },

    email: {
      type: String,
      required: [true, "Please enter an email"],
      unique: [true, "Email already taken"],
    },
    password: {
      type: String,
      required: [true, "Please enter password"],
    },
  },

  {
    timestamps: true,
  }
);

module.exports = mongoose.model("auth", authSchema);
