const express = require('express')
const { link } = require('fs')

const app = express()

app.get('/', (req, res) => {
  res.send('Menu principal.<br> Muito bem-vindos! <a href="/agora">Ir para agora deu certo</a>')
})

app.listen(3000, () => {
  console.log('Server online')
})


app.get('/agora', (req, res) => {
    res.send('Agora deu certo! <br><a href="/">Voltar pro Home!</a> <br> <a href="/eita"> Estamos linkando</a>')
  })

app.get('/eita', (req, res) => {
    res.send('Estamos Linkando <a href="/"> Voltando para o Home</a> <br> <a href="/agora"> Voltando para agora deu certo</a>')
  })