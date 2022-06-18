const Product = require("../models/Product");

class SearchController {
  async searchProductWithQuery(req, res, next) {
    const searchQuery = req.query.search;
    const limit = req.query.limit
    console.log(searchQuery);
    try {
      const searchProduct = await Product.find({
        productName: { $regex: searchQuery, $options: "i" },
      }).limit(limit)
      return res.status(200).json(searchProduct);
    } catch (err) {
      console.log("error");
      return res.status(500).json(err);
    }
  }
}
module.exports = new SearchController();
