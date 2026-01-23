import fs from 'fs'

const dataFile = fs.readFileSync('./dataBase.json')

const dataJson = JSON.parse(dataFile)

fs.writeFileSync("./dataBase.json", JSON.stringify([...dataJson,  { id: 2 , nome: 'gabroiel'}]) );

console.log(dataJson)