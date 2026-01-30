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

      const id = req.params.id;

      if (id && Number(id)) {
        // = 422 is status unprocessable entity
        res.status(422).send("Id inválido");
        return;
      }

      if (book) {
        res.status(200).send(book);
        return;
      }

      res.status(404).send("Livro não encontrado");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static createBook(req, res) {
    try {
      if (req.body.nome) {
        BookService.saveBook(req);
        res.status(201).send("Livro criado com sucesso!");
        return;
      }

      res.status(422).send("É necessario informar o nome");
    } catch (err) {
      res.status(500).send(err.message);
    }
  }

  static updateBook(req, res) {
    try {
      BookService.patchBook(req);
      res.status(200).send("livro atualizado com sucesso!");
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

  static deleteBook(req, res) {
    try {
      BookService.deletedBook(req);
      res.status(200).send("livro deletado com sucesso!");
    } catch (error) {
      res.status(500).send(error, message);
    }
  }
}
