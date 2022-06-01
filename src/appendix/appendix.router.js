const router = require("express").Router()
const controller = require("./appendix.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")


router.route("/:appendixId").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router;