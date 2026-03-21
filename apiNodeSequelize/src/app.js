const express = require("express");
const routes = require('./routes/index.js')

const app = express();
routes(app)


app.get("/", (req, res) => {
  res.send("Primeira rota");
});

module.exports = app;
