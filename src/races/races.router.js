const router = require("express").Router({mergeParams: true})
const controller = require("./races.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/:raceId").get(controller.read).all(methodNotAllowed)
router.route("/").get( controller.list).all(methodNotAllowed)

module.exports = router;