import BaseError from "./baseError.js";

export class NormalError extends BaseError {
  constructor(message = "Error no servidor1", status = 500) {
    super(message, status);

    Object.setPrototypeOf(this, new.target.prototype)

  }
}
