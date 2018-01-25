const { get } = require('microrouter');

const Controller = require('./placeController');

module.exports = [
  get('/place/all', Controller.getAllPlaces),
  get('/place', Controller.getPlacesById),
  get('/place', Controller.getPlacesByType),
  get('/place/status', Controller.getPlacesByStatus),
];
