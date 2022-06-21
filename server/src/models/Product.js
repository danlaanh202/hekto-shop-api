const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  productName: {
    type: String,
    required: true,
  },
  seller: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: "User",
  },

  price: {
    type: Number,
    required: true,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "Brand",
    //Default: the shop which sell this product
  },
  categories: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  size: {
    type: String,
  },
  soldAmount: {
    type: Number,
    default: 0,
  },
  isFeatured: {
    type: Boolean,
    default: false,
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
