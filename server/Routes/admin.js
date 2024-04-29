const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.post("/update-stock",productController.updateStock);
module.exports = router;
