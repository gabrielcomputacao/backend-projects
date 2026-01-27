import fs from "fs";

export class BookService {
  static getBooks() {
    // = readFileSyn pega o caminho de outra referencia , por isso so passamos o nome do arquivo, ele ja encontra
    const dataBooks = JSON.parse(fs.readFileSync("dataBase.json"));
    return dataBooks;
  }
  static getBookWithId(req) {
    const listBooks = JSON.parse(fs.readFileSync("dataBase.json"));
    const { path} = req;
    const dataPath = path.split('/')
   
    const book = listBooks.find( book => book.id == dataPath[2] )
    return book;
  }
}
