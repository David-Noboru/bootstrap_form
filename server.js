const express = require('express')
const { link } = require('fs')

const app = express()

app.get('/', (req, res) => {
  res.send('Muitos bem-vindos!')
})

app.listen(3000, () => {
  console.log('Server online')
})

app.get('/agora', (req, res) => {
    res.send('Agora deu certo!')
  })

  app.get('/eita', (req, res) => {
    res.send('Agora d')
  })