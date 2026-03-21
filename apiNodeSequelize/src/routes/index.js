const peopleRoutes = require("./people.js");
const express = require("express");

module.exports = (app) => {
  app.use(express.json(), peopleRoutes);
};
