import mongoose from "mongoose";

// * Validador global para os campos string
// ? Nesse caso, nenhum campo pode ser string vazia

mongoose.Schema.Types.String.set("validate", {
  validator: (value) => value.trim() !== "",
  message: "Campo nao pode ser vazio.",
});
