const router = require("express").Router()
const controller = require("./factions.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")


router.route("/:factionId").get(controller.read).all(methodNotAllowed)
router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router;