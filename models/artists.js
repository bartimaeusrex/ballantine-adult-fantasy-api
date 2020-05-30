const Artists = (connection, Sequelize) => {
  return connection.define('artists', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    coverArtist: { type: Sequelize.STRING, allowNull: false },
  }, { defaultScope: { attributes: { exclude: ['id', 'createdAt', 'updatedAt', 'deletedAt'] } } },
  { paranoid: true })
}

module.exports = Artists
