import fs from 'fs'

export class BooksController {
  static getBooks(req, res) {
    try {
      // = readFileSyn pega o caminho de outra referencia , por isso so passamos o nome do arquivo, ele ja encontra
      const dataBooks = JSON.parse(fs.readFileSync('dataBase.json'))
      res.status(200).send(dataBooks);
    } catch (err) {
      res.status(500).send(err.message);
    }
  }
}
