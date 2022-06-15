const express = require("express");
const router = express.Router();
const ProductRouter = require("../controllers/ProductController");

router.post("/add-product", ProductRouter.addProduct);
router.get("/get-product-query", ProductRouter.getProductWithQueryAndLimit);
router.get("/get-product-feature", ProductRouter.getFeatureProducts);
router.get("/get-product/:id", ProductRouter.getProductById);
router.get("/get-product", ProductRouter.getProducts);

module.exports = router;
