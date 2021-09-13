const router = require('express').Router();
const TeachersController = require("../controllers/teachers")

router.get("/", TeachersController.getTeachers)
router.get("/:id", TeachersController.getTeacherById)
router.post("/", TeachersController.createTeacher)
router.put("/:id", TeachersController.updateTeacher)
router.delete("/:id", TeachersController.deleteTeacherById)

module.exports = router;
