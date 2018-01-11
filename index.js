// Micro
const { send } = require('micro');
const { router, get } = require('microrouter');

// Services (of course)
const User = require('./');
const Place = require('./services/Place');
const Challenge = require('./services/Challenge');
const Gife = require('./services/Gife');
const Reward = require('./services/Reward');

const notFound = (req, res) => send(res, 404, 'Hi Hacker!');

module.exports = router(
  // Ping Ping
  get('/ping/user', User.ping),
  get('/ping/place', Place.ping),
  get('/ping/challenge', Challenge.ping),
  get('/ping/gife', Gife.ping),
  get('/ping/reward', Reward.ping),
  // Welcoming hacker zone
  get('/*', notFound),
);
