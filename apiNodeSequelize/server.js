import server from "./src/app.js";
import sequelize from "./src/db/database.js";

const PORT = 3014;

server.listen(PORT, async() => {

  await sequelize.authenticate();
  console.log("Banco postgres conectado.");
  


  console.log("servidor rodando na porta 3014");
});
