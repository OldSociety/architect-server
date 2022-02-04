const knex = require("../db/connection");

function list() {
    return knex("races").select("*");
  }