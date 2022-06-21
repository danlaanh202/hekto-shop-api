const express = require("express");
const router = express.Router();
const BrandController = require("../controllers/BrandController");

router.get("/get-brands", BrandController.getBrands)
router.post("/add-brand", BrandController.addBrand);


module.exports = router;
