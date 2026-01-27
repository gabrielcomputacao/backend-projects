import fs from "fs";

export class BookService {
  static getBooks() {
    // = readFileSyn pega o caminho de outra referencia , por isso so passamos o nome do arquivo, ele ja encontra
    const dataBooks = JSON.parse(fs.readFileSync("dataBase.json"));
    return dataBooks;
  }
  static getBookWithId(req) {
    const listBooks = JSON.parse(fs.readFileSync("dataBase.json"));
    const id = req.params.id;

    const book = listBooks.find((book) => book.id == id);
    return book;
  }
  static saveBook(req) {
    const data = req.body;

    const listBooks = JSON.parse(fs.readFileSync("dataBase.json"));
    console.log(listBooks);

    if (data) {
      fs.writeFileSync("dataBase.json", JSON.stringify([...listBooks, data]));
    }
    return;
  }

  static patchBook(req) {
    const id = req.params.id;
    const body = req.body;
    let listBooks = JSON.parse(fs.readFileSync("dataBase.json"));

    let indexBook = listBooks.findIndex((value) => value.id == id);

    listBooks[indexBook] = { ...listBooks[indexBook], ...body };

    fs.writeFileSync("dataBase.json", JSON.stringify([...listBooks]));
    return;
  }

  static deletedBook(req){
    const id = req.params.id

    let listBooks = JSON.parse(fs.readFileSync("dataBase.json"))

    const newListBooks = listBooks.filter( book => book.id != id)

    fs.writeFileSync("dataBase.json", JSON.stringify(newListBooks))
    return
  }
}
