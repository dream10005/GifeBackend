const dbConfig = require('../configs/database');
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
  dbConfig.database, dbConfig.user, dbConfig.password,
  {
    host: dbConfig.host,
    dialect: 'mysql',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },

    operatorsAliases: false,
  },
);

module.exports = sequelize;
