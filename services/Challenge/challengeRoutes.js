const { get } = require('microrouter');

const Controller = require('./challengeController');

module.exports = [
  // ping
  get('/challenge/ping', Controller.ping),
];
