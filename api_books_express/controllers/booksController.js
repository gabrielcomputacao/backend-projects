import { BookService } from "../services/bookService.js";

export class BooksController {
  static getBooks(req, res) {
    try {
      const dataBooks = BookService.getBooks();
      res.status(200).send(dataBooks);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static getUnicBook(req, res) {
    try {
      const book = BookService.getBookWithId(req);
      res.status(200).send(book);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static createBook(req, res) {
    try {
      
      BookService.saveBook(req);
      res.status(201).send("Livro criado com sucesso!");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static updateBook(req,res){
    try {
      BookService.patchBook(req)
      res.status(200).send("livro atualizado com sucesso!")
    } catch (error) {
      res.status(500).send(error.message)
    }
  }

  static deleteBook(req,res){
    try {
      BookService.deletedBook(req)
       res.status(200).send("livro deletado com sucesso!")
    } catch (error) {
      res.status(500).send(error,message)
    }
  }

}
