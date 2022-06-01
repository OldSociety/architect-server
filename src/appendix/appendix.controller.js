const appendix = require('../db/05-appendix.json')
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function appendixExists(req, res, next) {
  const { appendixId } = req.params
  const foundappendix = appendix.find((appendix) => appendix.id === Number(appendixId))
  if (foundappendix) {
    res.locals.appendix = foundappendix
    return next()
  }
  next({
    status: 404,
    message: `Paste id not found: ${appendixId}`,
  })
}

function read(req, res, next) {
  res.json({ data: res.locals.appendix })
}

function list(req, res, next) {
  res.json({ data: appendix })
}

module.exports = {
  read: [asyncErrorBoundary(appendixExists), read],
  list
}
