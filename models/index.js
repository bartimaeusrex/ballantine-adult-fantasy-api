const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')
const BooksModel = require('./books')
const PublishInfoModel = require('./publishInfo')
const ArtistModel = require('./artists')
const OriginalPublisherModel = require('./originalPublisher')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Authors = AuthorsModel(connection, Sequelize)
const PublishInfo = PublishInfoModel(connection, Sequelize)
const Artists = ArtistModel(connection, Sequelize)
const OriginalPublisher = OriginalPublisherModel(connection, Sequelize)
const Books = BooksModel(connection, Sequelize, Authors, PublishInfo)

Books.belongsTo(Authors)
Authors.hasMany(Books)

Books.belongsTo(Artists)
Artists.hasMany(Books)

Books.belongsTo(PublishInfo)
PublishInfo.hasMany(Books)

Books.belongsTo(OriginalPublisher)
OriginalPublisher.hasMany(Books)

module.exports = {
  Artists,
  Authors,
  Books,
  OriginalPublisher,
  PublishInfo,
  Op: Sequelize.Op
}



