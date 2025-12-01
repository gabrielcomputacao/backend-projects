import book from "../models/Book.js";

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
    try {
      const newBook = await book.create(req.body);

      // * 201 , codigo para algo cadastrado
      res.status(201).json({ message: " Criado com sucesso", book: newBook });
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

      res.status(200).json({ message: "Livro encontrado", book: dataBook });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para consultar livro ` });
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
}

export default BookController;
