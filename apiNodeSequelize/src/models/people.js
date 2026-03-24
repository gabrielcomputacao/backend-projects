const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Sequelize.Model {
    static associate(models) {
      People.hasMany(models.Registration, {
        foreignKey: "person_id",
      });
      People.hasMany(models.Course, {
        foreignKey: "person_id",
      });
    }
  }

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
      modelName: "People",
      tableName: "people",
      timestamps: true,
      underscored: true,
    },
  );

  return People;
};
