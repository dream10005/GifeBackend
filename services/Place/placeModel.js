const Sequelize = require('./../sequelize');

const Places = Sequelize.define('Places', {
  id: Sequelize.INTEGER,
  name: Sequelize.STRING,
  rating: Sequelize.FLOAT,
  rating_count: Sequelize.INTEGER,
  district: Sequelize.STRING,
  province: Sequelize.STRING,
  picture: Sequelize.STRING,
  latitude: Sequelize.FLOAT,
  longitude: Sequelize.FLOAT,
  address: Sequelize.STRING,
  about: Sequelize.TEXT,
  contact: Sequelize.STRING,
  type: Sequelize.STRING,
  price_min: Sequelize.INTEGER,
  price_max: Sequelize.INTEGER,
  create_at: Sequelize.DATE,
  update_at: Sequelize.DATE,
});

const UserDoingPlaces = Sequelize.define('UserDoingPlaces', {
  id: Sequelize.INTEGER,
  user_id: Sequelize.INTEGER,
  place_id: Sequelize.INTEGER,
  challenge_id: Sequelize.INTEGER,
  status: Sequelize.INTEGER,
  create_at: Sequelize.DATE,
  update_at: Sequelize.DATE,
});

module.exports = {
  Places,
  UserDoingPlaces,
};
