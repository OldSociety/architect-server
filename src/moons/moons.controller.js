const moons = require('../data/pantheon.json')

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
