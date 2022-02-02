// if (process.env.USER) require("dotenv").config();
const express = require('express')
const app = express()

const racesRouter = require("./page-races/races.router.js");
const buildRouter = require("./page-build/build.router.js");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const morgan = require('morgan')

// Middleware
app.use(morgan("dev")) //A small logging program to replace Logger printing in terminal


// Routes
//app.use("/")
app.use("/races", racesRouter); // Note: app.use
app.use("/characters/builder", buildRouter); // Note: app.use


//Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app
