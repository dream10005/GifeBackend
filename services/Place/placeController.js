const Model = require('./placeModel');

function getAllPlaces() {
  Model.Places.belongsTo(Model.ExternalReviews, { targetKey: 'place_id', foreignKey: 'id' });
  const result = Model.Places.findAll({
    include: [{
      model: Model.ExternalReviews,
    }],
  });
  return result;
}

function getPlacesById(req) {
  const result = Model.Places.findById(req.query.id);
  return result;
}

function getPlacesByType(req) {
  const result = Model.Places.findAll({
    where: {
      type: req.query.type,
    },
  });
  return result;
}

function getPlacesByStatus() {
  return 'getplacebystatus';
}

module.exports = {
  getAllPlaces,
  getPlacesById,
  getPlacesByType,
  getPlacesByStatus,
};
