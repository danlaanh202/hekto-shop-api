const mongoose = require("mongoose");
const ProductSchema = new mongoose.schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  categories: {
    type: String, //temporary, use reference later
    required: true,
  },
  size: {
    type: String,
  },
  tags: {
    type: String,
  },
  productImage: {
    type: String, //url
    required: true,
  },
  productSmallImage: {
    type: String, //url
  },
  moreDetails: {
    type: Array, //edit later when we finished this shit
  },
  video: {
    type: String, //Video url
  },
  additionalInfo: {
    type: String,
  },
});
module.exports = mongoose.model("Product", ProductSchema);
