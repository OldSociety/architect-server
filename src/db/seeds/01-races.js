const races = require("./00-races.json")

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE races RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('races').insert(races)
    })
}
