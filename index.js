// Micro
const { send } = require('micro');
const { router, get } = require('microrouter');

// Services (of course)
const userRoutes = require('./services/User/userRoutes');
const placeRoutes = require('./services/Place/placeRoutes');
const challengeRoutes = require('./services/Challenge/challengeRoutes');
const gifeRoutes = require('./services/Gife/gifeRoutes');
const rewardRoutes = require('./services/Reward/rewardRoutes');

const notFound = (req, res) => send(res, 404, 'Hi Hacker!');

module.exports = router(
  ...userRoutes,
  ...placeRoutes,
  ...challengeRoutes,
  ...gifeRoutes,
  ...rewardRoutes,
  // Welcoming hacker zone
  get('/*', notFound),
);
