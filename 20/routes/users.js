const router = require('express').Router();
const UsersController = require("../controllers/users")
const { isLogin } = require("../middlewares/auth")

router.get("/", isLogin, UsersController.getAll)
// router.get("/:id", TeachersController.getTeacherById)

module.exports = router;
