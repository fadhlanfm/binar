const router = require('express').Router();
const teachersRoute = require("./teachers")

router.use("/teachers", teachersRoute)

module.exports = router;
