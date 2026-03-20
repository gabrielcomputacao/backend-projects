const  Sequelize  = require('sequelize');
 const sequelize = new Sequelize("course", "root", "root", {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = sequelize;