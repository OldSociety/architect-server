const races = require('../db/01-races.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function read(req, res, next) {
  res.json({ data: res.locals.race });
}

async function raceExists(req, res, next) {
  const { raceId } = req.params
  const foundRace = races.find((race) => race.id === Number(raceId))
  if (foundRace) {
    res.locals.race = foundRace
    return next()
  }
  next({
    status: 404,
    message: `Paste id not found: ${raceId}`,
  })
}

async function list(req, res, next) {
  res.json({ data: races })
}

module.exports = {
  read: [asyncErrorBoundary(raceExists), read],
  list,
}
