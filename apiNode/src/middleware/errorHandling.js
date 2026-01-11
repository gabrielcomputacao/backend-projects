import mongoose from "mongoose";
import BaseError from "../errors/baseError.js";
import CastError from "../errors/castError.js";
import ValidationError from "../errors/validationError.js";

export const errorHandling = (error, req, res, next) => {
  if (error instanceof mongoose.Error.CastError) {
    new CastError().sendMesssageErro(res);
  } else if (error instanceof mongoose.Error.ValidationError) {
    new ValidationError(error).sendMesssageErro(res);
  }
  new BaseError().sendMesssageErro(res);
};
