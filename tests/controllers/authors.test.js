const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  // eslint-disable-next-line no-unused-vars
  before, beforeEach, afterEach, after, describe, it
} = require('mocha')
const { authorsList, singleAuthor } = require('../mocks/authors')
const { getAllAuthors, getAuthorByKeyword } = require('../../controllers/authors')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Authors', () => {
  let sandbox
  let stubbedFindOne
  let stubbedFindAll
  let stubbedSend
  let response
  let stubbedSendStatus
  let stubbedStatus
  let stubbedStatusDotSend

  before(() => {
    sandbox = sinon.createSandbox()

    stubbedFindAll = sandbox.stub(models.Authors, 'findAll')
    stubbedFindOne = sandbox.stub(models.Authors, 'findOne')

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

  describe('getAllAuthors', () => {
    it('retrieves a list of authors from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(authorsList)

      await getAllAuthors({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(authorsList)
    })

    it('returns a 500 status when an error occurs retrieving the authors', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllAuthors({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve author list, please try again.')
    })
  })

  describe('getAuthorByKeyword', () => {
    // eslint-disable-next-line max-len
    it('retrieves the author associated with the provided id from the database and calls response.send with it', async () => {
      const request = { params: { id: '3' } }

      stubbedFindOne.returns(singleAuthor)

      await getAuthorByKeyword(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '3' } })
      expect(stubbedSend).to.have.been.calledWith(singleAuthor)
    })

    it('returns a 404 status when no author is found', async () => {
      const request = { params: { id: '55' } }

      stubbedFindOne.returns(null)

      await getAuthorByKeyword(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '55' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 status when an error occurs retrieving the author by id', async () => {
      const request = { params: { id: '20' } }

      stubbedFindOne.throws('ERROR!')

      await getAuthorByKeyword(request, response)

      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve author, please try again.')
    })
  })
})
