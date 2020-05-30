const models = require('../models')

const getAllBooks = async (request, response) => {
  try {
    const books = await models.Books.findAll({ attributes: ['title'] })

    return response.send(books)
  } catch (error) {
    return response.status(500).send('Unable to retrieve books list, please try again!')
  }
}

const getBooksByKeyword = async (request, response) => {
  try {
    const { keyword } = request.params

    const book = await models.Books.findOne({
      attributes: ['title'],
      where: {
        [models.Op.or]: [
          { id: keyword },
          { title: { [models.Op.like]: `%${keyword}%` } }
        ]
      },
      include: [
        { model: models.Authors },
        { model: models.Artists },
      // { model: models.OriginalPublisher },
      // { model: models.PublishInfo },
      ],
    })

    return book
      ? response.send(book)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve book, please try again.')
  }
}


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

const patchBookById = async (request, response) => {
  try {
    const { id, coverArtist } = request.params
    const newArtist = request.body

    const artist = await models.Artists.findOne({ where: { id } })

    if (!artist) return response.status(404).send(`No "${id}" found`)

    await models.Artists.update({ [coverArtist]: newArtist }, { where: { coverArtist } })

    return response.send(newArtist)
  } catch (error) {
    return response.status(500).send('Unable to patch book, please try again')
  }
}

const saveNewBook = async (request, response) => {
  const {
    title, authorId, publishInfoId, originalPublisherId, artistId
  } = request.body

  if (!title || !authorId || !publishInfoId || !originalPublisherId || !artistId) {
    return response.status(400).send('All fields are required.')
  }

  const newBook = await models.Books.create({
    title, authorId, publishInfoId, originalPublisherId, artistId
  })

  return response.status(201).send(newBook)
}


module.exports = {
  getAllBooks,
  getBooksByKeyword,
  saveNewBook,
  patchBookById,
  deleteBookById
}
