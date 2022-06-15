const Product = require("../models/Product");
const { stringToMongoId } = require("../utils/mongoose");

class ProductController {
  async addProduct(req, res, next) {
    const newProduct = new Product({
      productName: req.body.productName,
      seller: stringToMongoId(req.body.seller),
      price: parseInt(req.body.price),
      brand: req.body.brand,
      description: req.body.description,
      productImage: req.body.productImage,
      size: "XL",
    });
    try {
      const savedProduct = await newProduct.save();
      return res.status(201).json(savedProduct);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async getProducts(req, res, next) {
    //get all products
    try {
      const products = await Product.find({});
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async getProductById(req, res, next) {
    //get one product by id
    try {
      const product = await Product.findById(req.params.id);
      return res.status(200).json(product);
    } catch (err) {
      // console.log(err);
      return res.status(500).json(err);
    }
  }
  async getFeatureProducts(req, res, next) {
    try {
      const products = await Product.find({ isFeatured: true });
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
  async getProductWithQueryAndLimit(req, res, next) {
    let query = req.query.q;

    try {
      const products = await Product.find({}).limit(6);
      return res.status(200).json(products);
    } catch (err) {
      return res.status(500).json(err);
    }
  }
}
module.exports = new ProductController();
