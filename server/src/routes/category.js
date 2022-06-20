const express = require("express");
const router = express.Router();
const CategoryController = require("../controllers/CategoryController");

router.get("/get-categories", CategoryController.getCategories)
router.post("/add-category", CategoryController.addCategory);


module.exports = router;
