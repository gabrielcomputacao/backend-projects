import express from 'express'
import AuthorController from '../controllers/AuthorController.js'

const routes = express.Router()

routes.get("/autores", AuthorController.listAuthors)
routes.get("/autores/:id", AuthorController.getAuthor)
routes.post("/autores", AuthorController.createAuthor)
routes.put("/autores/:id", AuthorController.updateAuthor)
routes.delete("/autores/:id", AuthorController.deleteAuthor)

export default routes;