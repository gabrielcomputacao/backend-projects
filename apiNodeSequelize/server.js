import server from "./src/app.js";

const PORT = 3014;

server.listen(PORT, () => {
  console.log("servidor rodando na porta 3014");
});
