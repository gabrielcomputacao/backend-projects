
import http from 'http'
import routes from './routes.js'

const PORT = 3005

const server =http.createServer((req,res) => {
    res.writeHead(200, { "content-type" : 'text/plain' })
    res.end(routes[req.url])
} )

server.listen( PORT, () =>{
    console.log(`servidor escutando na porta ${PORT}`);
    
} )
