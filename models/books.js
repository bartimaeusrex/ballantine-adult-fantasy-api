const Books = (connection, Sequelize, Authors) => {
  return connection.define('books', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    title: { type: Sequelize.STRING, allowNull: false },
    authorId: { type: Sequelize.STRING, allowNull: false, references: { model: Authors, key: 'id' } },
  }, { defaultScope: { attributes: { exclude: ['deletedAt'] } } },
  { paranoid: true })
}

module.exports = Books
