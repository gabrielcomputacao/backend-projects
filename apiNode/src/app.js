import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";

const connect = await connectDatabase();

connect.on("error", (err) => {
  console.log("deu erro", err);
});

connect.once("open", () => {
  console.log("Banco conectado.");
});

const app = express();
routes(app);


app.delete("/livros/:id", (req, res) => {
  const id = req.params.id;

  // livros = livros.filter( livro => livro.id !== Number(id) )
  const index = livros.findIndex((livro) => livro.id === Number(id));
  livros.splice(index, 1);

  res.status(200).send("livro removido");
});

export default app;
