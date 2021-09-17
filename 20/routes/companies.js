const router = require('express').Router();
const CompaniesController = require("../controllers/companies")
const { isLogin } = require("../middlewares/auth")

router.get("/", isLogin, CompaniesController.getAll)
// router.get("/:id", TeachersController.getTeacherById)
router.post("/", isLogin, CompaniesController.create)

module.exports = router;
