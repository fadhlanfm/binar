const router = require('express').Router();
const usersRoute = require("./users")
const companiesRoute = require("./companies")
const usersWorkingDaysRoute = require("./usersWorkingDays")

router.use("/users", usersRoute)
router.use("/companies", companiesRoute)
router.use("/usersworkingdays", usersWorkingDaysRoute)

module.exports = router;
