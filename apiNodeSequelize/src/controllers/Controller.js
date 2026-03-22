class Controller {
  constructor(entity) {
    this.entity = entity;
  }

  async getDataAll(req,res) {
    try {
      const data = await this.entity.getAll();
      res.status(200).json(data);
    } catch (error) {}
  }
}

module.exports = Controller;
