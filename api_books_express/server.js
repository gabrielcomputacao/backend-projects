
import express from 'express'
import routes from './routes/book.js'

const PORT = 3017
const server = express();

server.get('/', (req, res) =>{
    res.send('Hi Node test 2')
})

// ² Faz com que o Node consiga receber dados json
server.use(express.json())
server.use(routes)


server.listen(PORT, () =>{
    console.log('server rodando na 3017');
    console.log('http://127.0.0.1:3017/');
    
})