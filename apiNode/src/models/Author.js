
import mongoose from "mongoose";

const authorSchema = mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId},
    // moongose já tem essa funcionalidade de colocar a mensagem de erro personalizada nesses campos
    name: { type: String, required: [true, "O nome do autor deve ser obrigatório"]},
    nationality: { type: String},
    // * Validação personalizada
    age: { 
        type: Number,
        validate: {
            validator: (value) =>{
            return value > 5 && value < 150
        },
        message: "Não pode ser maior que 150. Valor Fornecido {VALUE}"
    }
     }
}, {versionKey: false});

const author = mongoose.model("authors", authorSchema);

export { author, authorSchema };