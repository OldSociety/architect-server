const nations = require('../db/02-nations.json')

function read(req, res, next) {
  res.json({ data: nations })
}

function list(req, res, next) {
  res.json({ data: nations })
}

module.exports = {
  read,
  list
}
