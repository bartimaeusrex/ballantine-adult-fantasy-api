const PublishInfo = (connection, Sequelize, Books) => {
  return connection.define('publishInfo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titleId: { type: Sequelize.INTEGER, allowNull: false, references: { model: Books, key: 'id' } },
    publishYear: { type: Sequelize.STRING, allowNull: false },
    publishOriginYear: { type: Sequelize.STRING, allowNull: false },
    originalPublisher: { type: Sequelize.STRING, allowNull: false },
    coverArtist: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = PublishInfo
