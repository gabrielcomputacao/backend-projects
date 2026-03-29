'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    
    static associate(models) {
      Registration.belongsTo(models.People, {
        foreignKey: 'person_id'
      })
      Registration.belongsTo(models.Course, {
        foreignKey: 'course_id'
      })
    }
  }
  Registration.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
    tableName: 'registrations',
    paranoid: true,
  });
  return Registration;
};