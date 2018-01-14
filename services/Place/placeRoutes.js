const { get } = require('microrouter');

const Controller = require('./placeController');

module.exports = [
  // ping
  get('/place/ping', Controller.ping),
];
