const express = require('express')
const app = express()
const morgan = require('morgan')
const racesRouter = require("./page-races/races.router.js");
const buildRouter = require("./page-build/build.router.js");

// Middleware
app.use(morgan("dev")) //A small logging organ replaces Logger printing in terminal


// Routes
app.use("/races", racesRouter); // Note: app.use
app.use("/characters"); // Note: characters -> builder
app.use("/builder", buildRouter); // Note: app.use

//Error handling
app.use((error, req, res, next) => {
  // sets up default 500 error
  console.error(error)
  const { status = 500, message = 'Something went wrong!' } = error
  res.status(status).json({ error: message })
})

module.exports = app
