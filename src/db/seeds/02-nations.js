const nations = require("./00-nations.json")

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE nations RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('nations').insert(nations)
    })
}
