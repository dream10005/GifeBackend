const { send } = require('micro');
const { router, get } = require('microrouter');
const indexcontroller = require('./controllers/index_controller.js');

const notFound = (req, res) => send(res, 404, 'Not Found !! use /hello');

module.exports = router(
  get('/hello', indexcontroller.getAllPlaces),
  get('/*', notFound),
);
