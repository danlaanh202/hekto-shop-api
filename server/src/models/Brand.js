const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    brand: {
        type: String,
        required: true,
        unique: true,
    },
    productIds: [{type: Schema.Types.ObjectId, ref:"Product"}]
})
module.exports = mongoose.model("Brand", BrandSchema);