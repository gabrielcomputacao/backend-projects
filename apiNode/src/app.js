
import express from 'express'
import connectDatabase from './config/dbConnect.js'

const connect = await connectDatabase();

connect.on("error", (err) =>{
    console.log("deu erro", err);
})

connect.once("open", () =>{
    console.log("Banco conectado");
    
})

const app = express()
// * middeware que passa por todas as requisicoes e a requisicao ele transforma em dados json
// * ele atua em toda requisicao
app.use(express.json())

const livros = [
    {
        id: 1,
        titulo: "senhor dos aneis"
    },
    {
        id: 2,
        titulo: "hobbit"
    },
]

app.get("/", (req,res) =>{
    res.status(200).send('primeira pagina do curso de node')
})
app.get("/livros", (req,res) =>{
    // Para usar o send, seria para dados mais simples
    // Com o metodo json converte para json , que é o formato padrao para api rest
    res.status(200).json(livros)
})

app.get("/livros/:id", (req,res) => {

    const id = req.params.id

    const livroSelected = livros.find( livro => livro.id === Number(id) )
    res.status(200).json(livroSelected)

})

app.post('/livros', (req,res) =>{
    livros.push(req.body)

    // * 201 , codigo para algo cadastrado
    res.status(201).send("Cadastrado com sucesso!")
})

app.put("/livros/:id", (req, res) => {

    const id = req.params.id

    const index = livros.findIndex( livro => livro.id === Number(id) )

    if(index !== -1){
        livros[index].titulo = req.body.titulo;
        res.status(200).send("Atualizado com sucesso")
    }else{

        res.status(200).send("nao teve dados")
    }

})

app.delete("/livros/:id", (req,res) =>{

    const id = req.params.id

    // livros = livros.filter( livro => livro.id !== Number(id) )
    const index = livros.findIndex( livro => livro.id === Number(id) )
    livros.splice(index,1)

    res.status(200).send("livro removido");


})



export default app;