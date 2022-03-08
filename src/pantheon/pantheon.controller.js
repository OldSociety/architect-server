const pantheon = require('../db/00-pantheon.json')

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
