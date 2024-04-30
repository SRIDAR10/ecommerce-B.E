const express = require("express");
const router = express.Router();
const productController = require("../Controllers/productController");

router.get("/get-products", productController.getProducts);

router.post("/add-product", productController.addProduct);

router.post("/add-company", productController.addCompany);

router.get("/get-all-companies", productController.getCompanies);

router.get("/delete-product", productController.deleteProduct)

module.exports = router;
