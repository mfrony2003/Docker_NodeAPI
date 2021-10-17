
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/person/names', (req, res) => {
    res.send(JSON.stringify([1,2,3]))
  })
  

  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
