import { Sequelize } from "@sequelize/core";
import { PostgresDialect } from "@sequelize/postgres";


const sequelize = new Sequelize({
  dialect: PostgresDialect,
  url: "postgres://root:root@127.0.0.1:5432/course",
});

export default sequelize;
