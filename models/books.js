const Books = (connection, Sequelize, Authors, PublishInfo) => {
  return connection.define('books', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.STRING, allowNull: false, references: { model: Authors, key: 'id' } },
    publishInfoId: { type: Sequelize.STRING, allowNull: false, references: { model: PublishInfo, key: 'id' } },
  }, { defaultScope: { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = Books
