import mongoose from "mongoose";

export const errorHandling = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    res.status(400).json({ message: "Tipo de ID não suportado" });
  } else if (error instanceof mongoose.Error.ValidationError) {
    //* A função join transforma todo o array em uma string com um separador
    const listErrors = Object.values(error.errors)
      .map((err) => err.message)
      .join(";");
    res.status(400).json({ message: `O erro foi: ${listErrors}` });
  }
  res
    .status(500)
    .json({ message: `${error.message} - falha para consultar author ` });
};
