const books = require('../bafbooks')
const models = require('../models')

const getAllBooks = (request, response) => {
  return response.send(books)
}

const getBooksByKeyword = (request, response) => {
  try {
    const { title } = request.params

    const matchingBook = books.filter(book => {
      const isPartialMatch = (book.author.concat(book.title)).join().toLowerCase()

      return isPartialMatch.includes(title.toLowerCase())
    })

    return matchingBook.length
      ? response.send(matchingBook)
      : response.status(404).send('Can\'t find that book.')
  } catch (error) {
    return response.status(500).send('Unable to retrieve book, please try again.')
  }
}

// const patchBookById = (request, response) => {
//   const { id } = request.params

// }

const deleteBookById = async (request, response) => {
  try {
    const id = Number(request.params.id)
    const books = await models.Books.findOne({ where: { id } })

    if (!books) return response.status(404).send(`Unknown book with ID: ${id}`)

    await models.Books.destroy({ where: { id } })

    return response.send(`Successfully deleted the book with ID: ${id}`)
  } catch (error) {
    return response.status(500).send('Unknown error while deleting book.')
  }
}

const saveNewBook = (request, response) => {
  const {
    id, title, author, publishYear, publishOriginYear,
    originalPublisher, coverArtist
  } = request.body

  if (!id || !title || !author || !publishYear ||
    !publishOriginYear || !originalPublisher || !coverArtist) {
    return response.status(400).send('All fields are required.')
  }

  const newBook = {
    id, title, author, publishYear, publishOriginYear, originalPublisher, coverArtist
  }

  books.push(newBook)

  return response.status(201).send(newBook)
}

module.exports = {
  getAllBooks,
  getBooksByKeyword,
  saveNewBook,
  patchBookById,
  deleteBookById
}
