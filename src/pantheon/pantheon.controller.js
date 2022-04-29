const pantheons = require('../db/00-pantheon.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function pantheonExists(req, res, next) {
  const { pantheonId } = req.params
  const foundpantheon = pantheons.find((pantheon) => pantheon.id === Number(pantheonId))
  if (foundpantheon) {
    res.locals.pantheon = foundpantheon
    return next()
  }
  next({
    status: 404,
    message: `Paste id not found: ${pantheonId}`,
  })
}

function read(req, res, next) {
  res.json({ data: res.locals.pantheon })
}

function list(req, res, next) {
  res.json({ data: pantheons })
}

module.exports = {
  read: [asyncErrorBoundary(pantheonExists), read],

  list
}
