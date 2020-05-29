const Authors = (connection, Sequelize) => {
  return connection.define('authors', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    author: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = Authors
