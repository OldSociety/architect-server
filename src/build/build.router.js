const router = require("express").Router()
const controller = require("./build.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

const cors = require("cors")

router.use(cors());

// router.route("/:buildId").get(controller.list).all(methodNotAllowed)

router.route("/").get(controller.list).all(methodNotAllowed)

module.exports = router;