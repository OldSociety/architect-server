// if (process.env.USER) require("dotenv").config();
const express = require('express')
const app = express()

const racesRouter = require("./races/races.router.js");
const buildRouter = require("./build/build.router.js");
const pantheonRouter = require("./pantheon/pantheon.router.js");
const nationsRouter = require("./nations/nations.router.js");
const errorHandler = require("./errors/errorHandler");
const notFound = require("./errors/notFound");
const cors = require("cors");
const morgan = require('morgan')

//TESTING
var testAPIRouter = require("./routes/testAPI");

app.use("/testAPI", testAPIRouter);


// Middleware
app.use(cors());
app.use(morgan("dev")) //A small logging program to replace Logger printing in terminal


// Routes
//app.use("/")
app.use("/races", racesRouter); // Note: app.use
app.use("/pantheon", pantheonRouter);
app.use("/nations", nationsRouter);
app.use("/build", buildRouter);

//Error handling
app.use(notFound);
app.use(errorHandler);

module.exports = app
