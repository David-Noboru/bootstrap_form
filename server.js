const express = require('express')

const app = express()

app.get('/', (req, res) => {
  res.send('Muitos bem-vindos!')
})

app.listen(3000, () => {
  console.log('Server online')
})