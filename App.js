const express = require("express");
const app = express();

const races = require("./data/races");

app.use("/races", (req, res) => {
    res.json({ data: races });
  });

module.exports = app;