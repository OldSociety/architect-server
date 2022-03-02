const pantheon = require("./00-pantheon.json")

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE pantheon RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('pantheon').insert(pantheon)
    })
}
