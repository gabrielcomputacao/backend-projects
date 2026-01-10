
import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    // moongose já tem essa funcionalidade de colocar a mensagem de erro personalizada nesses campos
    name: { type: String, required: [true, "O nome do autor deve ser obrigatório"]},
    nationality: { type: String}
}, {versionKey: false});

const author = mongoose.model("authors", authorSchema);

export { author, authorSchema };