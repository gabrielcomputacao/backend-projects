import BaseError from "./baseError.js";

export class NotFound extends BaseError {
  constructor(message = "Página não encontrada.") {
    super(message, 404);
  }
}
