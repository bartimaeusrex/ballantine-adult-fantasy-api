const PublishInfo = (connection, Sequelize) => {
  return connection.define('publishInfo', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    publishYear: { type: Sequelize.STRING, allowNull: false },
    publishOriginYear: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = PublishInfo
