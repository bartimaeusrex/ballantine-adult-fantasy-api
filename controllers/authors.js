const models = require('../models')
const books = require('../bafbooks')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors list, please try again.')
  }
}

const getAuthorByKeyword = async (request, response) => {
  try {
    const { keyword } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: keyword },
          { nameLast: { [models.Op.like]: `%${keyword}%` } }
        ]
      },
      include: [{ model: models.Books }],
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again.')
  }
}

const saveNewAuthor = (request, response) => {
  const {
    id, title, author, publishYear, publishOriginYear,
    originalPublisher, coverArtist
  } = request.body

  if (!id || !title || !author || !publishYear || !publishOriginYear || !originalPublisher || !coverArtist) {
    return response.status(400).send('All fields are required.')
  }

  const newBook = {
    id, title, author, publishYear, publishOriginYear, originalPublisher, coverArtist
  }

  books.push(newBook)

  return response.status(201).send(newBook)
}

module.exports = { getAllAuthors, getAuthorByKeyword, saveNewAuthor }
