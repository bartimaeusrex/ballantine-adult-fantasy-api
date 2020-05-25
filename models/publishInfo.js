const PublishInfo = (connection, Sequelize, Books) => {
  return connection.define('publishInfo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    titleId: { type: Sequelize.STRING, allowNull: false, references: { model: Books, key: 'id' } },
    publishyear: { type: Sequelize.INTEGER, allowNull: false },
    publishoriginyear: { type: Sequelize.INTEGER, allowNull: false },
    originalpublisher: { type: Sequelize.STRING, allowNull: false },
    coverartist: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}

module.exports = PublishInfo
