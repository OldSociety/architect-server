const pantheon = require('../db/pantheon.json')

function read(req, res, next) {
  res.json({ data: pantheon })
}

function list(req, res, next) {
  res.json({ data: pantheon })
}

module.exports = {
  read,
  list
}
