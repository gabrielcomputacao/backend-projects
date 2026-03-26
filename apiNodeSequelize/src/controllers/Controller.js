class Controller {
  constructor(entity) {
    this.entity = entity;
  }

  async createData(req, res) {
    const body = req.body;
    try {
      const user = await this.entity.createData(body);
      res.status(200).json("cadastrado com sucesso");
    } catch (error) {
      console.log(error)
    }
  }

  async getDataAll(req, res) {
    try {
      const data = await this.entity.getAll();
      res.status(200).json(data);
    } catch (error) {}
  }

  async updateRecord(req, res) {
    const { id } = req.params;
    const data = req.body;

    try {
      const isEffected = await this.entity.updateData(data, Number(id));

      if (!isEffected) {
        // * 400 Porque tentou atualizar e não conseguiu.
        res.status(400).json("Não foi possível atualizar.");
      }

      res.status(200).json("Atualizado com sucessso.");
    } catch (error) {}
  }

  async deleteRecord(req, res) {
    const id = req.params.id;
    console.log(id);
    try {
      await this.entity.excludeData(id);

      // = 200 OK
      // = 204 No Content

      res.status(200).json("deletado com sucesso");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Controller;
