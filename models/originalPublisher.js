const OriginalPublisher = (connection, Sequelize) => {
  return connection.define('originalPublisher', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    publisher: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = OriginalPublisher
