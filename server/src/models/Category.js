const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    category: {
        type: String,
        required: true,
        unique: true,
    },
    productIds: [{type: Schema.Types.ObjectId, ref:"Product"}]
})
module.exports = mongoose.model("Category", CategorySchema);