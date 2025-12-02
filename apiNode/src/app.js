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


export default app;
