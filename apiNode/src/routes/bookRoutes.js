import express from 'express'
import BookController from '../controllers/BookController.js'

const routes = express.Router()

routes.get("/livros", BookController.listBooks)
routes.get("/livros/:id", BookController.getBook)
routes.post("/livros", BookController.createBook)
routes.put("/livros/:id", BookController.updateBook)
routes.delete("/livros/:id", BookController.deleteBook)

export default routes;