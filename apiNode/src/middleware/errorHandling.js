import mongoose from "mongoose";

export const errorHandling = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Tipo de ID não suportado" });
  }
  res
    .status(500)
    .json({ message: `${error.message} - falha para consultar author ` });
};
