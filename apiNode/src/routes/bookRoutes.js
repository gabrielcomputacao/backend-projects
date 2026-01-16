import express from 'express'
import BookController from '../controllers/BookController.js'

const routes = express.Router()

// * O express tem uma paritcularidade que é necessario organizar as rotas da mais complexa para a menos complexa
// * Ele pode se confundir caso uma menos complexa esteja em cima

routes.get("/livros", BookController.listBooks)
routes.get("/livros/busca", BookController.searchBooksToPublisher)
routes.get("/livros/search", BookController.searchData)
routes.get("/livros/:id", BookController.getBook)
routes.post("/livros", BookController.createBook)
routes.put("/livros/:id", BookController.updateBook)
routes.delete("/livros/:id", BookController.deleteBook)

export default routes;