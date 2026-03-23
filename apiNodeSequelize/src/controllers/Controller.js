class Controller {
  constructor(entity) {
    this.entity = entity;
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

      if(!isEffected){
        // * 400 Porque tentou atualizar e não conseguiu.
        res.status(400).json('Não foi possível atualizar.');
      }

      res.status(200).json('Atualizado com sucessso.')
     
    } catch (error) {}
  }
}

module.exports = Controller;
