const Product = require("../models/Product");

class ProductController {
  async addProduct(req, res, next) {
    const newProduct = new Product({
      productName: req.body.productName,
      seller: req.body.sellerId,
      price: req.body.price,
      brand: req.body.brand,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, recusandae eveniet rem fugit, deleniti odio soluta dignissimos quas quo voluptatum nulla, debitis veniam voluptate nemo corrupti explicabo odit quibusdam nisi",
      size: "XL",
    });
    try {
      const savedProduct = await newProduct.save();
      return res.status(201).json(savedProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = new ProductController();
