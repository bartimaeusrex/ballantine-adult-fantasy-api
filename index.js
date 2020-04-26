const express = require('express')
const bodyParser = require('body-parser')
const bafbooks = require('./bafbooks')
const { getAllBooks, getBooksByKeyword, saveNewBook }
 = require('./controllers/bafbooks')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

app.get('/', (request, response) => {
  return response.render('index', { bafbooks })
})

app.get('/bafbooks', getAllBooks)

app.get('/bafbooks/:title', getBooksByKeyword)

app.post('/bafbooks', bodyParser.json(), saveNewBook)

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
