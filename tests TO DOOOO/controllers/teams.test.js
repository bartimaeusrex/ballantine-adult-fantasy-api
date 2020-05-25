const chai = require('chai')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const models = require('../../models')
const {
  before, beforeEach, afterEach, after, describe, it
} = require('mocha')
const { teamsList, singleTeam, postedTeam } = require('../mocks/teams')
const { getAllTeams, getTeamById, saveNewTeam } = require('../../controllers/teams')

chai.use(sinonChai)
const { expect } = chai

describe('Controllers - Teams', () => {
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

    stubbedCreate = sandbox.stub(models.Teams, 'create')
    stubbedFindAll = sandbox.stub(models.Teams, 'findAll')
    stubbedFindOne = sandbox.stub(models.Teams, 'findOne')

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

  describe('getAllTeams', () => {
    it('retrieves a list of teams from the database and calls response.send() with the list', async () => {
      stubbedFindAll.returns(teamsList)

      await getAllTeams({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedSend).to.have.been.calledWith(teamsList)
    })

    it('returns a 500 status when an error occurs retrieving the teams', async () => {
      stubbedFindAll.throws('ERROR!')

      await getAllTeams({}, response)

      expect(stubbedFindAll).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve team list, please try again.')
    })
  })

  describe('getTeamById', () => {
    // eslint-disable-next-line max-len
    it('retrieves the team associated with the provided id from the database and calls response.send with it', async () => {
      const request = { params: { id: '13' } }

      stubbedFindOne.returns(singleTeam)

      await getTeamById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '13' } })
      expect(stubbedSend).to.have.been.calledWith(singleTeam)
    })

    it('returns a 404 status when no team is found', async () => {
      const request = { params: { id: '77' } }

      stubbedFindOne.returns(null)

      await getTeamById(request, response)

      expect(stubbedFindOne).to.have.been.calledWith({ where: { id: '77' } })
      expect(stubbedSendStatus).to.have.been.calledWith(404)
    })

    it('returns a 500 status when an error occurs retrieving the team by id', async () => {
      const request = { params: { id: '88' } }

      stubbedFindOne.throws('ERROR!')

      await getTeamById(request, response)

      expect(stubbedFindOne).to.have.callCount(1)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to retrieve team, please try again.')
    })
  })


  describe('saveNewTeam', () => {
    // eslint-disable-next-line max-len
    it('accepts new team details and saves them as a new team, returning the saved record with a 201 status', async () => {
      const request = { body: postedTeam }

      stubbedCreate.returns(singleTeam)

      await saveNewTeam(request, response)

      expect(stubbedCreate).to.have.been.calledWith(postedTeam)
      expect(stubbedStatus).to.have.been.calledWith(201)
      expect(stubbedStatusDotSend).to.have.been.calledWith(singleTeam)
    })

    it('returns a 400 status when not all required fields are provided (missing location)', async () => {
      const { mascot, abbeviation, conference, division } = postedTeam
      const request = { body: { mascot, abbeviation, conference, division } }

      await saveNewTeam(request, response)

      expect(stubbedStatus).to.have.been.calledWith(400)
      // eslint-disable-next-line max-len
      expect(stubbedStatusDotSend).to.have.been.calledWith('The following fields are required: location, mascot, abbreviation, conference, division')
    })

    // eslint-disable-next-line max-len
    it('returns a 500 when an error occurs saving the new team', async () => {
      const request = { body: postedTeam }

      stubbedCreate.throws('ERROR!')

      await saveNewTeam(request, response)

      expect(stubbedCreate).to.have.been.calledWith(postedTeam)
      expect(stubbedStatus).to.have.been.calledWith(500)
      expect(stubbedStatusDotSend).to.have.been.calledWith('Unable to save new team, please try again.')
    })
  })
})
