const router = require('express').Router();
const UsersWorkingDaysController = require("../controllers/usersWorkingDays")
const { isLogin } = require("../middlewares/auth")

router.get("/", isLogin, UsersWorkingDaysController.getAll)
// router.get("/:id", TeachersController.getTeacherById)

module.exports = router;
