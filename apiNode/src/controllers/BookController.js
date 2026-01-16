import mongoose from "mongoose";
import { author, book } from "../models/index.js";

class BookController {
  static async listBooks(req, res) {
    try {
      const listBooks = await book.find({});

      res.status(200).json(listBooks);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para cadastrar livro` });
    }
  }

  static async createBook(req, res) {
    const newBook = req.body;

    try {
      const newAuthor = await author.findById(newBook.author);
      const finalBook = { ...newBook, author: { ...newAuthor._doc } };

      const createBook = await book.create(finalBook);

      // * 201 , codigo para algo cadastrado
      res
        .status(201)
        .json({ message: " Criado com sucesso", book: createBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para cadastrar livro` });
    }
  }

  static async getBook(req, res) {
    try {
      const id = req.params.id;
      const dataBook = await book.findById(id);

      if (dataBook) {
        res.status(200).json({ message: "Livro encontrado", book: dataBook });
      } else {
        res.status(404).json({ message: "Livro não encontrado" });
      }
    } catch (error) {
      if (error instanceof mongoose.Error.CastError) {
        res.status(400).json({ message: "Dado informado incorretamente." });
      } else {
        res
          .status(500)
          .json({ message: `${error.message} - falha para consultar livro ` });
      }
    }
  }

  static async updateBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Livro atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para atualizar livro` });
    }
  }

  static async deleteBook(req, res) {
    try {
      const id = req.params.id;
      await book.findByIdAndDelete(id);
      res.status(200).json({ message: "Livro deletado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar` });
    }
  }

  static async searchBooksToPublisher(req, res) {
    const publisher = req.query.publisher;
    try {
      const bookSearched = await book.find({ publisher: publisher });
      res.status(200).json({ message: "Livro buscado", book: bookSearched });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha ao buscar livro` });
    }
  }

  static async searchData(req, res, next) {
    const { title, publisher } = req.query;

    try {
      const search = {};

      if (title) search.title = title;
      if (publisher) search.publisher = publisher;

      // * Passando o objeto para o mongoose , ele ja sabe onde procurar , a busca dele é inteligente
      // * O campo publisher no objeto é o mesmo do objeto que tem no mongoose
      
      const resultSearch = await book.find(search);

      res.status(200).json(resultSearch);
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
