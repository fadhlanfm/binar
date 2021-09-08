const router = require('express').Router();
const ProductsController = require("../controllers/products")

router.get("/", ProductsController.getProducts)

module.exports = router;