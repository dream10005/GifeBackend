const Sequelize = require('./../sequelize');

const DataTypes = require('sequelize');

const Places = Sequelize.define(
  'Places', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    rating_count: DataTypes.INTEGER,
    district: DataTypes.STRING,
    province: DataTypes.STRING,
    picture: DataTypes.STRING,
    latitude: DataTypes.FLOAT,
    longitude: DataTypes.FLOAT,
    address: DataTypes.STRING,
    about: DataTypes.TEXT,
    contact: DataTypes.STRING,
    type: DataTypes.STRING,
    price_min: DataTypes.INTEGER,
    price_max: DataTypes.INTEGER,
  },
  { underscored: true },
);

const UserDoingPlaces = Sequelize.define('UserDoingPlaces', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_id: DataTypes.INTEGER,
  place_id: DataTypes.INTEGER,
  challenge_id: DataTypes.INTEGER,
  status: DataTypes.INTEGER,
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
});

const ExternalReviews = Sequelize.define('ExternalReviews', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  place_id: DataTypes.INTEGER,
  title: DataTypes.STRING,
  author: DataTypes.STRING,
  site_name: DataTypes.STRING,
  site_url: DataTypes.STRING,
  create_at: DataTypes.DATE,
  update_at: DataTypes.DATE,
});

module.exports = {
  Places,
  UserDoingPlaces,
  ExternalReviews,
};
