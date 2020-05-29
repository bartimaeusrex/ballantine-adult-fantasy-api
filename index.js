const express = require('express')
const bodyParser = require('body-parser')

// const bafbooks = require('./bafbooks')
const { getAllAuthors, getAuthorByKeyword } = require('./controllers/authors')
const {
  getAllBooks, getBooksByKeyword, saveNewBook, deleteBookById, patchBookById
} = require('./controllers/books')
const app = express()

app.use(express.static('public'))

app.set('view engine', 'pug')

// app.get('/', (request, response) => {
//   return response.render('index', { bafbooks })
// })

app.get('/', (request, response) => {
  return response.render('index')
})

app.get('/books/', getAllBooks)
app.get('/books/:keyword', getBooksByKeyword)

app.get('/authors/', getAllAuthors)
app.get('/authors/:keyword', getAuthorByKeyword)

app.post('/books/', bodyParser.json(), saveNewBook)
app.patch('/books/:id', bodyParser.json(), patchBookById)

app.delete('/books/:id', deleteBookById)

app.listen(8080, () => {
  // eslint-disable-next-line no-console
  console.log('Listening on port 8080.')
})
