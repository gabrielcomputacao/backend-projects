const database = require("../models/index");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const data = await database[this.model].findAll();
    return data;
  }

  async updateData(data, id) {
    const listRowsEffected = await database[this.model].update(data, {
      where: { id: id },
    });

    if (listRowsEffected[0] === 0) {
      return false;
    }

    return true;
  }
}

module.exports = Services;
