require('dotenv').config()

const { PORT = 9000 } = process.env
const knex = require('./db/connection')

const app = require('./app')
const listener = () => console.log(`Listening on Port ${PORT}!`)

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);

const app = require("./app");
const listener = () => console.log(`Listening on Port ${PORT}!`);
app.listen(PORT, listener);

knex.migrate
  .latest()
  .then((migrations) => {
    console.log("migrations", migrations);
    app.listen(PORT, listener);
  })
  .catch(console.error);
