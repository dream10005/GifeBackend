const { get } = require('microrouter');

const Controller = require('./placeController');

module.exports = [
  get('/place/allplaces', Controller.getAllPlaces),
  get('/place/id', Controller.getPlacesById),
  get('/place/type', Controller.getPlacesByType),
  get('/place/status', Controller.getPlacesByStatus),
  get('/place/search', Controller.getSearchPlaces),
];
