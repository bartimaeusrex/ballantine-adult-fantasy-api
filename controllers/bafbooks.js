
const books = require('../bafbooks')

const getAllBooks = (request, response) => {
  return response.send(books)
}

const getBooksByKeyword = (request, response) => {
  const { title } = request.params

  const matchingBook = books.filter(book => {
    const isPartialMatch = (book.author.concat(book.title)).join().toLowerCase()

      return isPartialMatch.includes(title.toLowerCase())
    })
  return matchingBook.length
    ? response.send(matchingBook)
    : response.status(404).send('Can\'t find that book.')
}

const saveNewBook = (request, response) => {
  const {
    id, title, author, publishyear, publishoriginyear,
    originalpublisher, editor, description,
  } = request.body

  if (!id || !title || !author || !publishyear ||
    !publishoriginyear || !originalpublisher ||
    !editor || !description) {
    return response.status(400).send('All fields are required.')
  }

  const newBook = {
    id, title, author, publishyear, publishoriginyear, 
    originalpublisher, editor, description,
  }

  books.push(newBook)

  return response.status(201).send(newBook)
}

module.exports = { getAllBooks, getBooksByKeyword, saveNewBook }
