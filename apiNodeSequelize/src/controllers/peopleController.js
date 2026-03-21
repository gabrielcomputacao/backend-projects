const database = require('../models/index')

class PeopleController {
  static async getAllPeople(req, res) {
    try {

       const dataPeople = await database.People.findAll();
       res.status(200).json(dataPeople)

    } catch (error) {
        throw error;
    }
  }
}

module.exports = PeopleController;
