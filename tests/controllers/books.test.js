const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  before, beforeEach, afterEach, after, describe, it
} = require('mocha')
const { booksList, singleBook, postedBook } = require('../mocks/books')
const { getAllBooks, getBooksByKeyword, saveNewBook } = require('../../controllers/books')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Books', () => {
  let sandbox
  let stubbedCreate
  let stubbedFindOne
  let stubbedFindAll
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatus
  let stubbedStatusDotSend

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedCreate = sandbox.stub(models.Books, 'create')
    stubbedFindAll = sandbox.stub(models.Books, 'findAll')
    stubbedFindOne = sandbox.stub(models.Books, 'findOne')

    stubbedSend = sandbox.stub()
    stubbedSendStatus = sandbox.stub()
    stubbedStatus = sandbox.stub()
    stubbedStatusDotSend = sandbox.stub()

    response = {
      send: stubbedSend,
      sendStatus: stubbedSendStatus,
      status: stubbedStatus,
    }
  })

  beforeEach(() => {
    stubbedStatus.returns({ send: stubbedStatusDotSend })
  })

  afterEach(() => {
    sandbox.reset()
  })

  after(() => {
    sandbox.restore()
  })

  describe('getAllBooks', () => {
    it('retrieves a list of books from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(booksList)

      await getAllBooks({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(booksList)
    })

    it('returns a 500 status when an error occurs retrieving the books', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllBooks({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve book list, please try again.')
    })
  })

  describe('getBooksByKeyword', () => {
    // eslint-disable-next-line max-len
    it('retrieves the book associated with the provided id from the database and calls response.send with it', async () => {
      const request = { params: { id: '13' } }

      stubbedFindOne.returns(singleBook)

      await getBooksByKeyword(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '13' } })
      expect(stubbedSend).to.have.been.calledWith(singleBook)
    })

    it('returns a 404 status when no book is found', async () => {
      const request = { params: { id: '77' } }

      stubbedFindOne.returns(null)

      await getBooksByKeyword(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '77' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 status when an error occurs retrieving the book by id', async () => {
      const request = { params: { id: '88' } }

      stubbedFindOne.throws('ERROR!')

      await getBooksByKeyword(request, response)

      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve book, please try again.')
    })
  })


  describe('saveNewBook', () => {
    // eslint-disable-next-line max-len
    it('accepts new book details and saves them as a new book, returning the saved record with a 201 status', async () => {
      const request = { body: postedBook }

      stubbedCreate.returns(singleBook)

      await saveNewBook(request, response)

      expect(stubbedCreate).to.have.been.calledWith(postedBook)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleBook)
    })

    it('returns a 400 status when not all required fields are provided (missing artistId)', async () => {
      const {
        title, authorId, publishInfoId, originalPublisherId
      } = postedBook
      const request = {
        body: {
          title, authorId, publishInfoId, originalPublisherId
        }
      }

      await saveNewBook(request, response)

      expect(stubbedStatus).to.have.been.calledWith(400)
      expect(stubbedStatusDotSend).to.have.been.calledWith('All fields are required.')
    })

    it('returns a 500 when an error occurs saving the new book', async () => {
      const request = { body: postedBook }

      stubbedCreate.throws('ERROR!')

      await saveNewBook(request, response)

      expect(stubbedCreate).to.have.been.calledWith(postedBook)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to save new book, please try again.')
    })
  })
})
