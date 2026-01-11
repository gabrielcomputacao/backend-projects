import BaseError from "./baseError.js";

class CastError extends BaseError {
  constructor(message = "Um ou mais dados fornecidos estão incorretos") {
    super(message, 400);
  }
}
export default CastError;
