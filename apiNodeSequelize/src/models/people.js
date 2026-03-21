const Sequelize = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class People extends Sequelize.Model {}

  People.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'People',
      tableName: 'people',
      timestamps: true,
      underscored: true,
    }
  );

  return People;
};