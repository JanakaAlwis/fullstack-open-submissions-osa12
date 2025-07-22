const express = require('express')
const app = express()
const PORT = 8080

app.get('/', (req, res) => {
  res.send('Modified without rebuild!')
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
