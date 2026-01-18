import { NormalError } from "../errors/normalError.js";

export async function pagination(req, res, next) {
  // ² Como fazer pagination usando mongoose, tem a função skip e limit na propria models
  let { page = 1, limit = 5, field = "_id", order = 1 } = req.query;

  page = parseInt(page);
  limit = parseInt(limit);
  order = parseInt(order);

  const resultData = req.result;

  if (page > 0 && limit > 0) {
    // ² sort => Ordena os dados, o mongoose aceita -1 para decrescente e 1 para crescente

    try {
      const paginateData = await resultData
        .find({})
        .sort({ [field]: order })
        .skip((page - 1) * limit)
        .limit(limit);

      res.status(200).json(paginateData);
    } catch (err) {
      next(err);
    }finally{
        return
    }
  }

  next(new NormalError("Dados Inválidos"));
}
