const { get } = require('microrouter');

const Controller = require('./userController');

module.exports = [
  // ping
  get('/user/ping', Controller.ping),
];
