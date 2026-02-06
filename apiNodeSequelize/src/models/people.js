import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../database';

export class People extends Model {}

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
    tableName: 'peoples',
    timestamps: true,
    underscored: true,
  }
);
