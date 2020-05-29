const Artist = (connection, Sequelize) => {
  return connection.define('artist', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    coverArtist: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = Artist
