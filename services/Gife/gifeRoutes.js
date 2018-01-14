const { get } = require('microrouter');

const Controller = require('./gifeController');

module.exports = [
  // ping
  get('/gife/ping', Controller.ping),
];
