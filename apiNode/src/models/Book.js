
import mongoose from "mongoose";
import { authorSchema } from "./Author.js";

const bookSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    title: { type: String, required: true },
    // * Personalizar campos no moongose, como enum, somente esses valores podem ser cadastrados
    publisher: { type: String, enum: {
        values: ["casa", "teste"],
        message: "Valor não é permitido. Valor fornecido {VALUE}"
    } },
    price: { type: Number },
    // * Personalizar valores minimos e maximos com mensagens personalizadas.
    pages: { type: Number, min: [10, "Não pode ser menor que 10"], max: 1000 },
    author: authorSchema,
}, { versionKey: false })

const book = mongoose.model("books", bookSchema)

export default book;
