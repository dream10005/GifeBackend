const Model = require('./placeModel');

function getAllPlaces() {
  const result = Model.Places.findAll();
  return result;
}

function getPlacesById() {
  const result = Model.Places.findById(1);
  return result;
}

function getPlacesByType() {
  return 'getplacebytype';
}

function getPlacesByStatus() {
  return 'getplacebystatus';
}

function getSearchPlaces() {
  return 'getsearchplace';
}

module.exports = {
  getAllPlaces,
  getPlacesById,
  getPlacesByType,
  getPlacesByStatus,
  getSearchPlaces,
};
