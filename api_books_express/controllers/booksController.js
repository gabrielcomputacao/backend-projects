export class BooksController {
  static getBooks(req, res) {
    try {
      res.status(200).send("getBooks");
    } catch (error) {
      res.status(500).send("erro to get books");
    }
  }
}
