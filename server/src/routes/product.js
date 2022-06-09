const express = require("express");
const router = express.Router();
const ProductRouter = require("../controllers/ProductController");

router.post("/add-product", ProductRouter.addProduct);

module.exports = router;
