const router = require("express").Router()
const controller = require("./nations.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")


router.route("/:nationId").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router;