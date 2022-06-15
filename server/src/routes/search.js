const express = require("express");
const router = express.Router();
const SearchRouter = require("../controllers/SearchController");

router.get("/get-search-products", SearchRouter.searchProductWithQuery);
module.exports = router;
