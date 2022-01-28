const express = require("express");
const app = express();
const logger = require("./config/logger")

//DATA Files
const races = require("../data/races");

// Middleware
app.use(logger) // Add request ID middleware
app.get("/races", (req, res) => {
    res.json({ data: races });
  });

  // Routes



  //Error handling

  app.use((error, req, res, next) => {
    console.error(error);
    const { status = 500, message = "Something went wrong!" } = error;
    res.status(status).json({ error: message });
  
  });

module.exports = app;