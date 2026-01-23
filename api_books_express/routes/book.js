import { Router } from "express";
import { BooksController } from "../controllers/booksController.js";

const routes = Router();

routes.get("/books", BooksController.getBooks);

export default routes;
