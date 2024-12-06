const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, ""],
  },
});
