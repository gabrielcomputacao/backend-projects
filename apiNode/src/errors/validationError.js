import CastError from "./castError.js";

class ValidationError extends CastError {
  static formatMessageError(errors) {
    const listErrors = Object.values(errors)
      .map((err) => err.message)
      .join(";");
      //* A função join transforma todo o array em uma string com um separador
    return listErrors;
  }

  constructor(error) {
    const messageError =  ValidationError.formatMessageError(error.errors);
    super(messageError);
  }
}

export default ValidationError;
