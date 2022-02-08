const router = require("express").Router({mergeParams: true})
const controller = require("./races.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")
const cors = require("cors")

router.use(cors());

// router.route("/:racesId").get(controller.read).all(methodNotAllowed)
router.route("/").get(cors(), controller.list).all(methodNotAllowed)

module.exports = router;