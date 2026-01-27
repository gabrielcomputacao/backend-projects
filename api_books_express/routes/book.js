import { Router } from "express";
import { BooksController } from "../controllers/booksController.js";

const routes = Router();

routes.get("/books", BooksController.getBooks);
routes.get("/books/:id", BooksController.getUnicBook);

export default routes;
