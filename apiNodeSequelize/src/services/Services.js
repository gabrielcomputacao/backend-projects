const database = require("../models/index");

class Services {
  constructor(model) {
    this.model = model;
  }

  async createData(data) {
    try {
      const user = await database[this.model].create({ ...data });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async getById(id) {
    const user = await database[this.model].findAll({
      where: { id: id },
    });
    return user;
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

  async excludeData(id) {
    try {
      const listRowsEffected = await database[this.model].destroy({
        where: { id: id },
      });

      console.log(listRowsEffected);

      if (listRowsEffected[0] === 0) {
        return false;
      }

      return true;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Services;
