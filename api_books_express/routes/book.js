import { Router } from "express";
import { BooksController } from "../controllers/booksController.js";

const routes = Router();

routes.get("/books", BooksController.getBooks);
routes.get("/books/:id", BooksController.getUnicBook);
routes.post("/books", BooksController.createBook)

export default routes;
