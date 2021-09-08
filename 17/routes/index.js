const HomeController = require("../controllers/home")
const productsRoute = require("./products")
const router = require('express').Router();

router.get("/", HomeController.helloWorld)
router.use("/products", productsRoute)

module.exports = router;
