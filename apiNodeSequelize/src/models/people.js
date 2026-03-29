const Sequelize = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class People extends Sequelize.Model {
    static associate(models) {
      People.hasMany(models.Registration, {
        foreignKey: "person_id",
        as: 'registeredPerson'
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
      // = Paranoid é um soft delete, ele atualiza o campo deleted, e nao exclui de verdade os dados, e tambem os relacionamentos ainda apontam para o dado que foi marcado como deletado, nao dando erro nas relações
      paranoid: true,
    },
  );

  return People;
};
