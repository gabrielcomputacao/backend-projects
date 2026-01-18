import mongoose from "mongoose";
import { author, book } from "../models/index.js";
import BaseError from "../errors/baseError.js";
import { NormalError } from "../errors/normalError.js";

class BookController {
  static async listBooks(req, res) {
    // ² Como fazer pagination usando mongoose, tem a função skip e limit na propria models
    let { page = 1, limit = 5, field = "_id", order= 1 } = req.query;

    page = parseInt(page);
    limit = parseInt(limit);
    order = parseInt(order)

    if (page > 0 && limit > 0) {

      // ² sort => Ordena os dados, o mongoose aceita -1 para decrescente e 1 para crescente

      try {
        const listBooks = await book
        .find({})
        .sort({ [field]: order })
          .skip((page - 1) * limit)
          .limit(limit);

        res.status(200).json(listBooks);
        return;
      } catch (error) {
        next(error);
      }
    }

    next(new NormalError("Dados Inválidos"));
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
    const {
      title,
      publisher,
      numMax,
      numMin,
      nameAuthor,
      page = 1,
      limitPages = 5,
    } = req.query;

    // = Regex por meio do javascript
    const regex = new RegExp(title, "i");

    try {
      const search = {};

      // = regex por meio dos recursos proprioes do mongoose
      //if (title) search.title = { $regex: title, $options: "i" };

      if (title) search.title = regex;
      if (publisher) search.publisher = publisher;
      if (numMin) search.pages = { $gte: numMin };
      if (numMax) search.pages = { ...search.pages, $lte: numMax };

      if (nameAuthor) {
        const authorResult = await author.findOne({ name: nameAuthor });

        if (authorResult !== null) {
          search.author = authorResult;
        } else {
          // ² Caso a pessoa buscou por um autor e não encontrou , a lista retornanda de volta é vazia
          //² Nesse caso não é viavel mandar um erro, e sim uma lista vazia
          res.status(200).json([]);
          return;
        }
      }

      // * Passando o objeto para o mongoose , ele ja sabe onde procurar , a busca dele é inteligente
      // * O campo publisher no objeto é o mesmo do objeto que tem no mongoose

      console.log(search);
      const resultSearch = await book
        .find(search)
        .skip((page - 1) * limitPages)
        .limit(limitPages);

      res.status(200).json(resultSearch);
    } catch (error) {
      next(error);
    }
  }
}

export default BookController;
