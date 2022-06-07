const mongoose = require("mongoose");
const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  blogCover: {
    type: String, //URL
    required: true,
  },
  subTitle: {
    type: String,
    required: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("Blog", BlogSchema);
