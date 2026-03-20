const server = require("./src/app.js");
const sequelize = require("./src/db/database.js");

const PORT = 3014;

server.listen(PORT, async () => {
  await sequelize.authenticate();
  console.log("Banco postgres conectado.");

  console.log("servidor rodando na porta 3014");
});
