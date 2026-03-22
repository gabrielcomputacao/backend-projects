const database = require("../models/index");

class Services {
  constructor(model) {
    this.model = model;
  }

  async getAll() {
    const data = await database[this.model].findAll();
    return data;
  }
}

module.exports = Services;
