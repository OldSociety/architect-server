const history = require('../db/04-history.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

function read(req, res, next) {
  res.json({ data: history })
}

function list(req, res, next) {
  res.json({ data: history })
}

module.exports = {
  read,
  list
}
