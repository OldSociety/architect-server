const nations = require('../db/02-nations.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function nationExists(req, res, next) {
  const { nationId } = req.params
  const foundnation = nations.find((nation) => nation.id === Number(nationId))
  if (foundnation) {
    res.locals.nation = foundnation
    return next()
  }
  next({
    status: 404,
    message: `Paste id not found: ${nationId}`,
  })
}

function read(req, res, next) {
  res.json({ data: res.locals.nation })
}

function list(req, res, next) {
  res.json({ data: nations })
}

module.exports = {
  read: [asyncErrorBoundary(nationExists), read],
  list
}
