const { get } = require('microrouter');

const Controller = require('./rewardController');

module.exports = [
  // ping
  get('/reward/ping', Controller.ping),
];
