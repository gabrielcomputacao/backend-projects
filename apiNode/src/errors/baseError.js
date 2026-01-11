class BaseError extends Error {
  constructor(message = "Erro no servidor", status = 500) {
    super();
    this.message = message;
    this.status = status;
  }

  sendMesssageErro(res) {
    // .json sempre define o header como type: application/json
    res.status(this.status).json({ message: this.message });
  }
}

export default BaseError;