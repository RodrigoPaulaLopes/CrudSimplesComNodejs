const express = require('express')
const server = express()

server.use(express.json())

filmes = ['homem aranha', 'vingadores', 'batman']

server.get('/cursos/:id', (req, res) =>{
    const {filme} = req.params

    return res.json(filmes[filme])
})

server.get('/cursos/', (req, res) =>{
    return res.json(filmes)
})

server.post('/cursos/', (req, res) =>{
    const {filme} = req.body
    filmes.push(filme)
    return res.json(filme)
})

server.put('/cursos/:index', (req, res) => {
    const {index} = req.params
    const {name} = req.body
    cursos[index] = name
    return res.json(cursos)
})

server.delete('/cursos/:index', (req, res) => {
    const {index} = req.params
    cursos.splice(index, 1)
    return res.json({message: "O curso foi deletado"})
})

server.listen(3000)