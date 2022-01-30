const router = require("express").Router({mergeParams: true})
const controller = require("./races.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/:racesId").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.read).all(methodNotAllowed)

module.exports = router;