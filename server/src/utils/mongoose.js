const mongoose = require("mongoose");

function stringToMongoId(str) {
  return mongoose.Types.ObjectId(str);
}

module.exports = { stringToMongoId };
