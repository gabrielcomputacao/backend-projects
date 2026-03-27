const Services = require("./Services.js");

class PeopleService extends Services {
  constructor() {
    super("People");
  }

  async getRegistrationPerPerson(id) {
    const person = await super.getById(id);
    const listRegistrations = await person.getRegisteredPerson();
    return listRegistrations;
  }
}

module.exports = PeopleService;
