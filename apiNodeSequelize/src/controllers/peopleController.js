const PeopleService = require("../services/PeopleService.js");
const Controller = require("./Controller.js");
const peopleService = new PeopleService();

class PeopleController extends Controller {
  constructor() {
    super(peopleService);
  }

  async getRegistrations(req, res) {
    const { personId } = req.params;
    const listRegistrations =
      await peopleService.getRegistrationPerPerson(personId);
    res.status(200).json(listRegistrations);
  }
}

module.exports = PeopleController;
