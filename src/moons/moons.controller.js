const moons = require('../data/pantheons.json')

function read(req, res, next) {
  res.json({ data: moons })
}

function list(req, res, next) {
  res.json({ data: moons })
}

module.exports = {
  read,
  list
}
