import express from "express";
import book from "./bookRoutes.js";
import authors from "./authorsRoutes.js"


const routes = (app) => {
  app.route("/").get((req, res) => res.status(200).send("Curso de Node DashBoard"));

  
  // * middeware que passa por todas as requisicoes e a requisicao ele transforma em dados json
  // * ele atua em toda requisicao
  app.use(express.json(), book, authors);
};

export default routes;
