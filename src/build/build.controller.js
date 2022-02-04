const welcome = require('../data/welcome.json')

function read(req, res, next) {
  res.json({ data: welcome })
}

function list(req, res, next) {
  res.json({ data: welcome })
}

module.exports = {
  read,
  list
}
