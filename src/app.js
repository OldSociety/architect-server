const express = require('express')
const app = express()
const morgan = require('morgan')
const racesRouter = require("./races/races.router");

//Middleware Test
const sayHello = (req, res) => {
  res.send('Hello!')
}

// Middleware
app.use(morgan("dev")) //A small logging organ replaces Logger printing in terminal


// Routes
app.use("/races", racesRouter); // Note: app.use

//Error handling
app.use((error, req, res, next) => {
  // sets up default 500 error
  console.error(error)
  const { status = 500, message = 'Something went wrong!' } = error
  res.status(status).json({ error: message })
})

module.exports = app
