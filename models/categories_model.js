const mongoose = require("mongoose");

const categoriesSchema = mongoose.Schema({
  categoryName: {
    type: String,
    required: [true, ""],
  },

},
{ timestamps: true }
);


module.exports = mongoose.model("categoriesModel", categoriesSchema);
