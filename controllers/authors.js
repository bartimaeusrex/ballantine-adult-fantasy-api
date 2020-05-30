const models = require('../models')

const getAllAuthors = async (request, response) => {
  try {
    const authors = await models.Authors.findAll()

    return response.send(authors)
  } catch (error) {
    return response.status(500).send('Unable to retrieve authors list, please try again!')
  }
}

const getAuthorByKeyword = async (request, response) => {
  try {
    const { keyword } = request.params

    const author = await models.Authors.findOne({
      where: {
        [models.Op.or]: [
          { id: keyword },
          { author: { [models.Op.like]: `%${keyword}%` } }
        ],
      },
      include: [
        {
          model: models.Books,
          attributes: ['title']
        }
      ],
    })

    return author
      ? response.send(author)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve author, please try again.')
  }
}

module.exports = { getAllAuthors, getAuthorByKeyword }
