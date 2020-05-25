const Sequelize = require('sequelize')
const allConfigs = require('../config/sequelize')
const AuthorsModel = require('./authors')
const BooksModel = require('./books')
const PublishInfoModel = require('./publishinfo')

const environment = process.env.NODE_ENV || 'development'
const config = allConfigs[environment]

const connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host, dialect: config.dialect,
})

const Authors = AuthorsModel(connection, Sequelize)
const Books = BooksModel(connection, Sequelize, Authors)
const PublishInfo = PublishInfoModel(connection, Sequelize, Books)

Books.belongsTo(Authors)
Authors.hasMany(Books)
PublishInfo.belongsTo(Books)

module.exports = {
  Authors,
  Books,
  PublishInfo,
  Op: Sequelize.Op
}



