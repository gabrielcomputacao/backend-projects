import express from "express";
import connectDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
import { errorHandling } from "./middleware/errorHandling.js";
import { notFoundHandling } from "./middleware/notFoundHandling.js";

const connect = await connectDatabase();

connect.on("error", (err) => {
  console.log("deu erro", err);
});

connect.once("open", () => {
  console.log("Banco conectado.");
});

const app = express();
routes(app);

// * Middleware tratamento de erro 404
app.use(notFoundHandling);

// Middleware de erro do express
// ? Passando esses quatro parametros com erro sendo o primeiro , o express identifica que é um middleware de error
// ? Middleware intercepta sempre que é um erro
app.use((erro, req,res,next) =>{
  errorHandling(erro, req,res,next);
})


export default app;
