const factions = require('../db/03-factions.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function factionExists(req, res, next) {
  const { factionId } = req.params
  const foundfaction = factions.find((faction) => faction.id === Number(factionId))
  if (foundfaction) {
    res.locals.faction = foundfaction
    return next()
  }
  next({
    status: 404,
    message: `Paste id not found: ${factionId}`,
  })
}

function read(req, res, next) {
  res.json({ data: res.locals.faction })
}

function list(req, res, next) {
  res.json({ data: factions })
}

module.exports = {
  read: [asyncErrorBoundary(factionExists), read],
  list
}
