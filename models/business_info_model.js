const mongoose = require("mongoose");

const businessInfoSchema = mongoose.Schema(
  {
    businessName: {
      type: String,
      required: [true, ""],
    },

    businessType: {
      type: String,
      required: [true, ""],
    },
    category: {
      type: String,
      required: [true, ""],
    },
    address: {
      type: String,
      required: [true, ""],
    },
    region: {
      type: String,
      required: [true, ""],
    },
    city: {
      type: String,
      required: [true, ""],
    },
    contact: {
      type: String,
      required: [true, ""],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("businessInfo", businessInfoSchema);
