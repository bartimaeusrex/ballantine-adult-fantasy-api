const express = require('express')
const bodyParser = require('body-parser')
// const { getAllBooks, getBooksByKeyword, saveNewBook }
//  = require('./controllers/bafbooks')
const app = express()

app.get('/books', getAllBooks)

app.get('/books/:title', getBookByKeyword)

app.post('/books', bodyParser.json(), saveNewBook)

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
