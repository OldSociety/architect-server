const router = require("express").Router({mergeParams: true})
const controller = require("./build.controller")
const methodNotAllowed = require("../errors/methodNotAllowed")

router.route("/").get(controller.read).all(methodNotAllowed)