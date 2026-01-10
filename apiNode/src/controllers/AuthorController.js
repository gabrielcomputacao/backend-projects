import mongoose from "mongoose";
import { author } from "../models/Author.js";

class AuthorController {
  static async listAuthors(req, res) {
    try {
      const listAuthors = await author.find({});

      res.status(200).json(listAuthors);
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para cadastrar author` });
    }
  }

  static async createAuthor(req, res) {
    try {
      const newAuthor = await author.create(req.body);

      // * 201 , codigo para algo cadastrado
      res
        .status(201)
        .json({ message: " Criado com sucesso", author: newAuthor });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para cadastrar author` });
    }
  }

  static async getAuthor(req, res) {
    try {
      const id = req.params.id;
      const dataAuthor = await author.findById(id);

      if (dataAuthor !== null) {
        res
          .status(200)
          .json({ message: "Author encontrado", book: dataAuthor });
      } else {
        // Recurso não localizado - Not Found
        res.status(404).json({ message: "Autor não encontrado." });
      }
    } catch (error) {
      if(error instanceof mongoose.Error.CastError){
        res.status(400).json({message: 'Tipo de ID não suportado'})
      }
      res
        .status(500)
        .json({ message: `${error.message} - falha para consultar author ` });
    }
  }

  static async updateAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndUpdate(id, req.body);

      res.status(200).json({ message: "Author atualizado" });
    } catch (error) {
      res
        .status(500)
        .json({ message: `${error.message} - falha para atualizar author` });
    }
  }

  static async deleteAuthor(req, res) {
    try {
      const id = req.params.id;
      await author.findByIdAndDelete(id);
      res.status(200).json({ message: "Author deletado" });
    } catch (error) {
      res.status(500).json({ message: `${error.message} - falha ao deletar` });
    }
  }
}

export default AuthorController;
