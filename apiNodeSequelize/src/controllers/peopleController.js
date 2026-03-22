const PeopleService = require("../services/PeopleService.js");
const Controller = require("./Controller.js");
const peopleService = new PeopleService();

class PeopleController extends Controller {
  constructor() {
    super(peopleService);
  }
}

module.exports = PeopleController;
